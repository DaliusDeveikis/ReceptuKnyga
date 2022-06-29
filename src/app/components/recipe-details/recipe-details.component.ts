import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from 'src/app/models/recipe';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  
  public recipe:Recipe|null=null;
  constructor(
    private recipeService:RecipeService, 
    private route:ActivatedRoute, 
    private router: Router
    ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.recipe = this.recipeService.getRecipe(id);
  }

  public increaseLikes(id?:string){
    if (id!=null){
      this.recipeService.increaseLikes(id);
      this.router.navigate(["/"]);
    }
  }

}
