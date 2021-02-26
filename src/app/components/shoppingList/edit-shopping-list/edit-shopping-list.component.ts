import { Component, OnInit, Output, ViewChild, EventEmitter, ElementRef } from '@angular/core';
import { ShoppingService } from 'src/app/services/shopping.service';

import { Ingredient } from 'src/models/ingredient.model';

@Component({
  selector: 'app-edit-shopping-list',
  templateUrl: './edit-shopping-list.component.html',
  styleUrls: ['./edit-shopping-list.component.css']
})
export class EditShoppingListComponent implements OnInit {
@ViewChild('nameInput') nameRef: ElementRef<HTMLInputElement> 
@ViewChild('amountInput') amountRef: ElementRef

//@Output() addNewIngredientEvent: EventEmitter<Ingredient> = new EventEmitter<Ingredient>()

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit(): void {
  }

  addIngredient(): void{
    this.shoppingService.addIngredients([ 
      new Ingredient(
      this.nameRef.nativeElement.value,
     this.amountRef.nativeElement.value
      )
    ])

    
  }
}
