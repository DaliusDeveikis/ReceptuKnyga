import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Recipe } from '../models/recipe';
import { RecipeCount } from '../models/recipecount';

@Injectable({
  providedIn: 'root'
})
export class RecipecountService {
  private readonly url = 'https://receptuknyga-b6875-default-rtdb.europe-west1.firebasedatabase.app/'

  constructor(private http: HttpClient) { }

  public addRecipecount(recipeCount: RecipeCount) {
    return this.http.post(this.url + 'recipecount.json', recipeCount)
  }

  public getRecipes(){
    return this.http.get<{[key:string]:Recipe}>(this.url+"recipes.json",).pipe(
      map((response)=>{
        let recipes:Recipe[]=[];
        for (let key in response){
          recipes.push({...response[key],id:key});
        }
        return recipes;
      })
    )
  }

  public getRecipecount(){
    return this.http.get<{[key:string]:RecipeCount}>(this.url+"recipecount.json",).pipe(
      map((response)=>{
        let recipes:RecipeCount[]=[];
        for (let key in response){
          recipes.push({...response[key]});
        }
        return recipes;
      })
    )
  }
}
