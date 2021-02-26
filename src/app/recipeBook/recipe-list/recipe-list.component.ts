import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';

import { Recipe } from 'src/models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] 

  //@Output() recipeSelectedEvent: EventEmitter<Recipe> = new EventEmitter()

  constructor(private recipeService: RecipeService) { }

  ngOnInit(){
    this.recipes = this.recipeService.getRecipes()
  }

  // onRecipeSelected(recipe){
  //   console.log('list says ' + recipe.name)
  //   this.recipeSelectedEvent.emit(recipe)
  // }  

}
