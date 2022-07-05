import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingridient',
  templateUrl: './ingridient.component.html',
  styleUrls: ['./ingridient.component.css']
})
export class IngridientComponent implements OnInit {

  public name:string = ''
  public quantity:number|null = null
  public price:number|null = null

  public result: number|null = null

  constructor() { }

  ngOnInit(): void {
  }

  public totalPrice():number|null {
    console.log(this.name,this.quantity,this.price)
    if ( this.quantity != null && this.price != null) {
      this.result = this.quantity * this.price
      return this.result
    } else {
      return this.result
    }
    
  }

}
