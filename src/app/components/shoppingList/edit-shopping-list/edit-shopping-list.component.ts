import {
  Component,
  OnInit,
  Output,
  ViewChild,
  EventEmitter,
  ElementRef,
  OnDestroy,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ShoppingService } from 'src/app/services/shopping.service';

import { Ingredient } from 'src/models/ingredient.model';

@Component({
  selector: 'app-edit-shopping-list',
  templateUrl: './edit-shopping-list.component.html',
  styleUrls: ['./edit-shopping-list.component.css'],
})
export class EditShoppingListComponent implements OnInit, OnDestroy {
  // @ViewChild('nameInput') nameRef: ElementRef<HTMLInputElement>
  // @ViewChild('amountInput') amountRef: ElementRef

  //@Output() addNewIngredientEvent: EventEmitter<Ingredient> = new EventEmitter<Ingredient>()

  editMode = false;
  editSub: Subscription;
  editItemIndex
  editItem


  constructor(
    private shoppingService: ShoppingService,
    private fb: FormBuilder
  ) {}
  ingForm = this.fb.group({
    name: ['', [Validators.required]],
    amount: ['', [Validators.required]],
  });

  ngOnInit(): void {
    this.editSub = this.shoppingService.editingItem.subscribe(index => {
      this.editMode = true
      this.editItemIndex = index
      this.editItem = this.shoppingService.getIngredient(index)
      this.ingForm.setValue({
        name: this.editItem.name,
        amount: this.editItem.amount
      })
    })
  }

  addIngredient(): void {
    if(this.editMode){
      this.shoppingService.editIng(this.editItemIndex, {name: this.ingForm.value.name, amount: this.ingForm.value.amount })
    } else {
      this.shoppingService.addIngredients([
        new Ingredient(this.ingForm.value.name, this.ingForm.value.amount),
      ]);
    }
    this.ingForm.reset()
    this.editMode = false
  }

clearForm(){
  this.ingForm.reset()
  this.editMode = false
}

deleteItem(){
  this.shoppingService.deleteIng(this.editItemIndex)
  this.ingForm.reset()
  this.editMode = false
}




  ngOnDestroy(){
    this.editSub.unsubscribe()
  }

}
