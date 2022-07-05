import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NewRecipeComponent } from './components/new-recipe/new-recipe.component';
import { AddIngridientsComponent } from './components/add-ingridients/add-ingridients.component';
import { IngridientComponent } from './components/ingridient/ingridient.component';


const routes: Routes = [
  {path: '', component : RecipeListComponent},
  {path:'recipes/:id', component: RecipeDetailsComponent},
  {path:'new', component: NewRecipeComponent},
  {path:'ingriedient', component: AddIngridientsComponent},
  {path:'ing', component: IngridientComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {

}