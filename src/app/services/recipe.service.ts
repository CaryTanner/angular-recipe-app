import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from 'src/models/ingredient.model';

import { Recipe } from 'src/models/recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Big Beef Burger',
      'A hamburger is a sandwich of one or more cooked patties of ground meat placed inside a sliced bread roll.',
      'https://upload.wikimedia.org/wikipedia/commons/0/0b/RedDot_Burger.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Buns', 2),
        new Ingredient('Fries', 27)
       
      ]
    ),
    new Recipe(
      'Chicken Nuggets',
      'A chicken nugget is a chicken product made from chicken meat that is breaded or battered, then deep-fried or baked.',
      'https://upload.wikimedia.org/wikipedia/commons/d/d3/Some_chicken_nuggets.jpg',
      [
        new Ingredient('chicken', 1),
        new Ingredient('Nuggets', 2),
        new Ingredient('Fries', 27)
      ]
    ),
  ];

  selectedRecipe = new Subject<Recipe>();
  recipechange = new Subject<Recipe[]>()

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipeById(id: number): Recipe{
      return this.recipes[id]
  }

  addRecipe(recipe: Recipe){
    this.recipes = [...this.recipes, recipe]
    this.recipechange.next(this.getRecipes())
  }

  updateRecipe(index: number, recipe: Recipe){
      this.recipes[index] = recipe
      this.recipechange.next(this.getRecipes())
  }

  deleteRecipe(index){
    this.recipes.splice(index, 1)
    this.recipechange.next(this.getRecipes())
    
  }

}
