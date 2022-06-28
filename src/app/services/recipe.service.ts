import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Recipe } from '../models/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private readonly url = 'https://receptuknyga-b6875-default-rtdb.europe-west1.firebasedatabase.app/'

  public increaseLikeEmitter = new EventEmitter()
  constructor(private http: HttpClient) { }

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
        return recipes;
      })
    )
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
