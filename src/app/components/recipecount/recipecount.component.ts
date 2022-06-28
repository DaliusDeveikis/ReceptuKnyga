import { RecipeCount } from './../../models/recipecount';
import { RecipecountService } from './../../services/recipecount.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipecount',
  templateUrl: './recipecount.component.html',
  styleUrls: ['./recipecount.component.css']
})
export class RecipecountComponent implements OnInit {

  public recipeCount : RecipeCount[] = []

  public breakfast: number = 0
  public lunch: number = 0
  public dinner: number = 0
  public eveningMeal: number = 0

  constructor(private recipecountService: RecipecountService) { }

  ngOnInit(): void {
    console.log(this.recipeCount)

  }

  public addRecipe() {
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
      this.recipecountService.addRecipecount({"breakfast":this.breakfast, "lunch": this.lunch, "dinner": this.dinner, "eveningMeal": this.eveningMeal}).subscribe((result)=> {
      })
    })
  }

  public getRecipecount() {
    this.recipecountService.getRecipecount().subscribe((result)=> {
      this.recipeCount = result;
    }) 
  }

}
