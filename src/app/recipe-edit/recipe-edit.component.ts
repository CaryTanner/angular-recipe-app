import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipe } from 'src/models/recipe.model';
import { RecipeService } from '../services/recipe.service';
import { ShoppingService } from '../services/shopping.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
})
export class RecipeEditComponent implements OnInit {
  recipe: Recipe;
  id: number;
  editMode = false;

  constructor(
    private shoppingService: ShoppingService,
    private recipeService: RecipeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      //check for 'new recipe' or edit mode via params
      this.editMode = params['id'] != null 
      this.recipe = this.recipeService.getRecipeById(this.id);

    });
  }
}
