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
    this.getRecipecount()
    
  }

  public getRecipecount() {
    this.recipecountService.getRecipecount().subscribe((result)=> {
      this.recipeCount = result;
      this.count()
    }) 
  }

  public count() {
    for (let c of this.recipeCount) {
      this.breakfast = c.breakfast
      this.lunch = c.lunch
      this.dinner = c.dinner
      this.eveningMeal = c.eveningMeal
    }
  }

}
