import { Component, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormArray, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css'],
})
export class NewRecipeComponent implements OnInit {
  public recipeForm: FormGroup;

  constructor(private recipeService: RecipeService) {
    this.recipeForm = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.maxLength(30),
      ],this.RecipeValidator()),
      preparationTime: new FormControl(null, [
        Validators.required,
        this.timeValidator,
      ]),
      description: new FormControl(null, Validators.required),
      image: new FormControl(null, [Validators.required, this.urlValidator]),
      kcal: new FormControl(null),
      allergens: new FormArray([]),
      ingredients: new FormArray([]),
      mealTime: new FormControl(null, Validators.required),
    });
  }

  ngOnInit(): void {}

  RecipeValidator():AsyncValidatorFn{
    return (control:AbstractControl):Observable<ValidationErrors|null>=>{
      return this.recipeService.getRecipes().pipe( map((response)=>{
          let exist=false;
          response.forEach((recipe)=>{
            if (recipe.name === control.value &&
              recipe.mealTime === this.recipeForm.get('mealTime')?.value){
              exist=true;
            }
          });
          if (exist){
            console.log("Toks pavadinimas egzistuoja tokiam laikui")
            return {"error":"Toks pavadinimas egzistuoja tokiam laikui"};
          }else{
            console.log("Viskas Ok!")
            return null;
          }
          
      }))
    }
  }

  timeValidator(control: FormControl): { [s: string]: boolean } | null {
    if (control.value % 5) {
      return { mustBe5MinIntervals: true };
    } else {
      return null;
    }
  }

  urlValidator(control: FormControl): { [s: string]: boolean } | null {
    const regex = new RegExp(
      /(https:\/\/)([^\s(["<,>/]*)(\/)[^\s[",><]*(.png|.jpg)(\?[^\s[",><]*)?/g
    );
    if (!regex.test(control.value)) {
      return { mustBeValidURL: true };
    } else {
      return null;
    }
  }

  public addRecipe() {
    this.recipeService.addRecipe(this.recipeForm.value).subscribe(()=>{
      console.log(this.recipeForm.value)
    });
    
    
  }

  public addAllergens() {
    const allergen = new FormControl(null, Validators.required);
    (this.recipeForm.get('allergens') as FormArray).push(allergen)
  }

  public deleteAllergens() {
    (this.recipeForm.get('allergens') as FormArray).removeAt(-1);
  }

  public allergens() {
    return (this.recipeForm.get('allergens') as FormArray).controls
  }

  public addIngredients(){
    const address=new FormGroup({
      name:new FormControl(null,Validators.required),
      quantity:new FormControl(null, Validators.required),
      units:new FormControl(null, Validators.required)
    });
    (<FormArray> this.recipeForm.get('ingredients')).push(address);
  }

  public deleteIngredients(allergen : number) {
    (this.recipeForm.get('ingredients') as FormArray).removeAt(allergen);
  }

  public ingredients(){
    return (<FormArray> this.recipeForm.get('ingredients')).controls;
  }

  public abstractToFormGroup(formGroup:AbstractControl){
    return formGroup as FormGroup;
  }

}
