import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { map , tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddIngridientsService {
  private readonly url = 'https://receptuknyga-b6875-default-rtdb.europe-west1.firebasedatabase.app/'
  public ingridientsEmitter = new EventEmitter();

  constructor(private http:HttpClient) { }

  public addIngridients(ingridient:string){
    
    return this.http.post(this.url+"ingredients.json", {ingridient}).pipe(tap((response)=>{
      this.ingridientsEmitter.emit();
    }));
    
  }

  getIngridients(){
    return this.http.get<{[key:string]:{ingridient:string}}>(this.url+"ingredients.json").pipe(map((response)=>{
      let result:{ingridient:string}[]=[];
      for (let key in response){
        result.push( {ingridient:response[key].ingridient} );
      } 
      return result;
    }));
  }
}
