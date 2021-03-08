import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { RecipeService } from 'src/app/services/recipe.service';

import { Recipe } from 'src/models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[] 
  recipesSub: Subscription

  //@Output() recipeSelectedEvent: EventEmitter<Recipe> = new EventEmitter()

  constructor(private recipeService: RecipeService) { }

  ngOnInit(){
    this.recipes = this.recipeService.getRecipes()
    this.recipesSub = this.recipeService.recipechange.subscribe(newRecipes => {
      this.recipes = newRecipes
    })
  }

  ngOnDestroy(){
    this.recipesSub.unsubscribe()
  }

  // onRecipeSelected(recipe){
  //   console.log('list says ' + recipe.name)
  //   this.recipeSelectedEvent.emit(recipe)
  // }  

}
