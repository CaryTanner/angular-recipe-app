import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from 'src/models/recipe.model';
import { RecipeService } from '../services/recipe.service';
import { ShoppingService } from '../services/shopping.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
})
export class RecipeEditComponent implements OnInit {
  //recipe: Recipe;
  id: number;
  editMode = false;
  recipeForm;

  constructor(
    private shoppingService: ShoppingService,
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      //check for 'new recipe' or edit mode via params
      this.editMode = params['id'] != null;
      //this.recipe = this.recipeService.getRecipeById(this.id);
      this.initForm();
    });
  }

  initForm() {
    let recipe: Recipe;
    let recipeName = '';
    let recipeImage = '';
    let recipeDesc = '';
    let recipeIngredients = this.fb.array([])

    if (this.editMode) {
      recipe = this.recipeService.getRecipeById(this.id);
      recipeName = recipe.name;
      recipeImage = recipe.imageUrl;
      recipeDesc = recipe.description;
      if (recipe['ingredients']) {
        
         
        for (let ing of recipe.ingredients) {
          recipeIngredients.push(
            this.fb.group({
              name: [ing.name],
              amount: [ing.amount],
            })
          );
        }
      }
    }

    this.recipeForm = this.fb.group({
      name: [recipeName, [Validators.required]],
      imageUrl: [recipeImage],
      description: [recipeDesc, [Validators.required]],
      ingredients: recipeIngredients
    });
  }

  onSave() {
    console.log(this.recipeForm.value);
    if(this.editMode){
      this.recipeService.updateRecipe(this.id, this.recipeForm.value)
    } else {
      this.recipeService.addRecipe(this.recipeForm.value)
    }
    this.recipeForm.reset()
    this.router.navigate(['/recipes'])
  }

  get controls() {
    // a getter!
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  get ingArray() {
    // a getter!
    return this.recipeForm.get('ingredients') as FormArray
  }

  addIng(){
   this.ingArray.push(
      this.fb.group({
        name: '',
        amount: ''
      })
   )
  }

  deleteIng(index: number){
    this.ingArray.removeAt(index)
  }

  onCancel(){
    this.recipeForm.reset()
    this.router.navigate(['/recipes'])
  }
}
