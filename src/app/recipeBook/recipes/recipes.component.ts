import { Component, DoCheck, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from 'src/models/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
 selectedRecipe: Recipe

  constructor( private recipeService: RecipeService) { }

  ngOnInit(): void {
    //this.selectedRecipe = this.recipeService.selectedRecipe
    this.recipeService.selectedRecipe.subscribe(
      (recipe: Recipe) => {
        this.selectedRecipe = recipe
      }
    )
  }

 

// onSelectRecipe(selection: Recipe){
//   console.log('recipes says' + selection.name)
//   this.selectedRecipe = selection
// }

}
