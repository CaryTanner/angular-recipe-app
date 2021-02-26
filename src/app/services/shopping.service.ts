import { Injectable, EventEmitter } from "@angular/core";

import { Ingredient } from "src/models/ingredient.model";

@Injectable({
    providedIn: 'root'
})
export class ShoppingService{
     ingChange: EventEmitter<Ingredient[]> = new EventEmitter<Ingredient[]>()
    private ingredients: Ingredient[] = [new Ingredient('apples', 5), new Ingredient('fish', 2)]

    addIngredients(newIngs: Ingredient[]){
        this.ingredients.push(...newIngs)
        this.ingChange.emit(this.ingredients.slice())
    }

    getIngredients(){
        return this.ingredients.slice()
    }
}