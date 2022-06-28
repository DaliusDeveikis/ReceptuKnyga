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

  constructor(private recipecountService: RecipecountService) { }

  ngOnInit(): void {
    console.log(this.recipeCount)
    this.getRecipecount()
  }

  public getRecipecount() {
    this.recipecountService.getRecipecount().subscribe((result)=> {
      this.recipeCount = result;
    }) 
  }

}
