import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Recipe } from '../models/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private readonly url = environment.dbUrl
  public recipe:Recipe[]=[];

  public increaseLikeEmitter = new EventEmitter()
  constructor(
    private http: HttpClient,
    private router:Router
    ) { }

  public addRecipe(recipe: Recipe) {
    return this.http.post(this.url + 'recipes.json', recipe)
  }

  public getRecipes(){
    return this.http.get<{[key:string]:Recipe}>(this.url+"recipes.json",).pipe(
      map((response)=>{
        let recipes:Recipe[]=[];
        for (let key in response){
          recipes.push({...response[key],id:key});
        }
        this.recipe = recipes;
        return recipes;
      })
    )
  }

  public getRecipe(id:string):Recipe|null{
    let result:Recipe|null=null;
    this.recipe.forEach((recipe)=>{
      if (recipe.id!=null && recipe.id==id){
        result=recipe;
      }
    });
    if (result==null){
      this.router.navigate(["/"]);
    }
    return result;
  }

  public increaseLikes(id: string) {
    let likes = 0
    this.http.get<number>(this.url + "recipes/" + id + "/likes.json").subscribe((response)=> {
      console.log(response)
      likes = response
      likes++
      this.http.patch(this.url + "recipes/" + id + ".json", {likes: likes}).subscribe((response)=> {
        console.log(response)
        this.increaseLikeEmitter.emit()
      })
    })

   

  }

}
