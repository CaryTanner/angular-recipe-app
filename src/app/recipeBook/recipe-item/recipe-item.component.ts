import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from 'src/models/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
@Input() recipe: Recipe
@Input() index: number
//@Output() recipeSelected: EventEmitter<Recipe> = new EventEmitter()

  constructor(private recipeSerive: RecipeService) { }

  ngOnInit(): void {
  }

  selectRecipe(){
    console.log('item says  ' + this.recipe.name)
    this.recipeSerive.selectedRecipe.emit(this.recipe)
  }

}
