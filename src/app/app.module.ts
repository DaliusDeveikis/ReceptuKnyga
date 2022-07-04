import { AboutModule } from './about/about.module';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NewRecipeComponent } from './components/new-recipe/new-recipe.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { AddIngridientsComponent } from './components/add-ingridients/add-ingridients.component';
import { RecipecountComponent } from './components/recipecount/recipecount.component';
import { AppRoutingModule } from './app-routing.module';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RecipeItemComponent } from './components/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';

@NgModule({
  declarations: [
    AppComponent,
    
    NewRecipeComponent,
    RecipeListComponent,
    AddIngridientsComponent,
    RecipecountComponent,
    NavigationComponent,
    RecipeItemComponent,
    RecipeDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AboutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
