import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HeaderComponent} from './components/header.component'
import { ShoppingListComponent } from './components/shoppingList/shopping-list/shopping-list.component';
import { EditShoppingListComponent } from './components/shoppingList/edit-shopping-list/edit-shopping-list.component';
import { RecipeListComponent } from './recipeBook/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipeBook/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipeBook/recipe-detail/recipe-detail.component';
import { RecipesComponent } from './recipeBook/recipes/recipes.component';
import { DropdownDirective } from './directives/dropdown.directive';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RecipeStawrtComponent } from './recipe-stawrt/recipe-stawrt.component';

@NgModule({
  declarations: [
    AppComponent,
  
    ShoppingListComponent,
    HeaderComponent,
    EditShoppingListComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipesComponent,
    DropdownDirective,
    RecipeEditComponent,
    NotFoundComponent,
    RecipeStawrtComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
