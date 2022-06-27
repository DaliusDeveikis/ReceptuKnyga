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

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipeService.getRecipes().subscribe((response)=>{
      this.recipes=response;
    })
  }

  public ingrediants() {
    let ingrediants: string[] = []
    this.recipes.forEach((recipe, i) => {
      ingrediants.push(recipe.ingredients[i])
    })
    return ingrediants
  }

}
