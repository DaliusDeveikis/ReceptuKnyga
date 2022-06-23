import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css'],
})
export class NewRecipeComponent implements OnInit {
  public recipeForm: FormGroup;

  constructor() {
    this.recipeForm = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.maxLength(30),
      ]),
      preparationTime: new FormControl(null, [
        Validators.required,
        this.timeValidator,
      ]),
      description: new FormControl(null, Validators.required),
      image: new FormControl(null, [Validators.required, this.urlValidator]),
      kcal: new FormControl(null),
      allergens: new FormArray([]),
      ingredients: new FormArray([])
    });
  }

  ngOnInit(): void {}

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
    console.log(this.recipeForm);
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

  public deleteIngredients() {
    (this.recipeForm.get('ingredients') as FormArray).removeAt(-1);
  }

  public ingredients(){
    return (<FormArray> this.recipeForm.get('ingredients')).controls;
  }

  public abstractToFormGroup(formGroup:AbstractControl){
    return formGroup as FormGroup;
  }

}
