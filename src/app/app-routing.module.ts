import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ShoppingListComponent } from './components/shoppingList/shopping-list/shopping-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeStawrtComponent } from './recipe-stawrt/recipe-stawrt.component';
import { RecipeDetailComponent } from './recipeBook/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipeBook/recipe-list/recipe-list.component';
import { RecipesComponent } from './recipeBook/recipes/recipes.component';

const routes: Routes = [
  {path: '',  redirectTo: 'recipes', pathMatch: 'full'},
  {path: 'recipes', component: RecipesComponent, children: [
    {path: '', component: RecipeStawrtComponent},
    {path: 'new', component: RecipeEditComponent},
    {path: ':id', component: RecipeDetailComponent},
    {path: ':id/edit', component: RecipeEditComponent},
  ] },
  {path: 'shoppinglist', component: ShoppingListComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
