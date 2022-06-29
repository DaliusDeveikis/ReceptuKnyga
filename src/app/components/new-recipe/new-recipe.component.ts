import { Component, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormArray, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { AddIngridientsService } from 'src/app/services/add-ingridients.service';
import { RecipeService } from 'src/app/services/recipe.service';
import { RecipecountService } from 'src/app/services/recipecount.service';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css'],
})
export class NewRecipeComponent implements OnInit {
  public recipeForm: FormGroup;
  public ingridients:{ingridients:string}[]=[];

  public breakfast: number = 0
  public lunch: number = 0
  public dinner: number = 0
  public eveningMeal: number = 0

  constructor(
    private recipeService: RecipeService,
    private addIngridientsService: AddIngridientsService,
    private recipecountService: RecipecountService
    ) {
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
      mealTime: new FormControl(null),
    });
  }

  ngOnInit(): void {
    this.getIngridients();
    this.addIngridientsService.ingridientsEmitter.subscribe(()=>{
      this.getIngridients();
    });
  }

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

  private getIngridients(){
    this.addIngridientsService.getIngridients().subscribe((result)=>{
      this.ingridients = result;
    });
  }

  public addRecipe() {
    this.recipeService.addRecipe(this.recipeForm.value).subscribe(()=>{
      this.recipecountService.addRecipecount({"breakfast":this.breakfast, "lunch": this.lunch, "dinner": this.dinner, "eveningMeal": this.eveningMeal}).subscribe((result)=> {
        this.addRecipecount()
      })
    });
  }

  public addRecipecount() {
    this.recipecountService.getRecipes().subscribe((result)=> {
      for (let meal of result) {
        switch (meal.mealTime) {
          case "breakfast" : this.breakfast++
          break
          case "lunch" : this.breakfast++
          break
          case "dinner" : this.breakfast++
          break
          case "eveningMeal" : this.breakfast++
        }
      }
    })
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
    const ingridients=new FormGroup({
      ingridients:new FormControl(null,Validators.required),
      quantity:new FormControl(null, Validators.required),
      units:new FormControl(null, Validators.required)
    });
    (<FormArray> this.recipeForm.get('ingredients')).push(ingridients);
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
