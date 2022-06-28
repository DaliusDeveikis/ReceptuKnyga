import { Component, OnInit } from '@angular/core';
import { AddIngridientsService } from 'src/app/services/add-ingridients.service';

@Component({
  selector: 'app-add-ingridients',
  templateUrl: './add-ingridients.component.html',
  styleUrls: ['./add-ingridients.component.css']
})
export class AddIngridientsComponent implements OnInit {
  public ingridients:string="";

  constructor(private addIngridientsService: AddIngridientsService) { }

  ngOnInit(): void {
  }

  public addIngridients(){
    this.addIngridientsService.addIngridients(this.ingridients).subscribe(()=>{
      this.ingridients="";
    });

  }

}
