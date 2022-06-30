import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  public recipes:Recipe[]=[];
  public recipesDisplay:Recipe[]=[];

  public allMeals: boolean = true
  public breakfast: boolean = true
  public lunch: boolean = true
  public dinner: boolean = true
  public eveningMeal: boolean = true

  constructor(private recipeService: RecipeService) { }

  private filterRecipes() {
    this.recipesDisplay = []
    this.recipes.forEach((recipe) => {
      if (this.allMeals) this.recipesDisplay.push(recipe)
      if (this.breakfast && recipe.mealTime == 'breakfast') this.recipesDisplay.push(recipe)
      if (this.lunch && recipe.mealTime == 'lunch') this.recipesDisplay.push(recipe)
      if (this.dinner && recipe.mealTime == 'dinner') this.recipesDisplay.push(recipe)
      if (this.eveningMeal && recipe.mealTime == 'eveningMeal') this.recipesDisplay.push(recipe)
    })
  }

  ngOnInit(): void {
    this.recipeService.getRecipes().subscribe((response)=>{
      this.recipes=response;
      this.filterRecipes()
    })
    this.recipeService.increaseLikeEmitter.subscribe(() => {
      this.recipeService.getRecipes().subscribe((response)=>{
        this.recipes=response;
        this.filterRecipes()
      })
    })
  }

  public increaseLikes(id?:string) {
    if (id != null) {
      this.recipeService.increaseLikes(id);
    }
  }

  public filter() {
    this.filterRecipes()
  }

}
