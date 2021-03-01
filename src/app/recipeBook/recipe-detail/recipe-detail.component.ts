import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';
import { ShoppingService } from 'src/app/services/shopping.service';
import { Ingredient } from 'src/models/ingredient.model';
import { Recipe } from 'src/models/recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
recipe: Recipe
id: number
  constructor(private shoppingService: ShoppingService, private recipeService: RecipeService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id']
      this.recipe = this.recipeService.getRecipeById(this.id)
    })
    
    //const id = +this.route.snapshot.params['id']
    


    // this.recipeService.selectedRecipe.subscribe(
    //   (recipe: Recipe) => {
    //     this.recipe = recipe
    //   })

  }

 addToShoppingList(){
     
  this.shoppingService.addIngredients(this.recipe.ingredients)
  
 }





}
