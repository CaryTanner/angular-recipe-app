import { Injectable, EventEmitter } from "@angular/core";

import { Ingredient } from "src/models/ingredient.model";
import {Subject} from 'rxjs'

@Injectable({
    providedIn: 'root'
})
export class ShoppingService{
    ingChange = new  Subject<Ingredient[]>()
    //ingChange: EventEmitter<Ingredient[]> = new EventEmitter<Ingredient[]>()
    private ingredients: Ingredient[] = [new Ingredient('apples', 5), new Ingredient('fish', 2)]

    addIngredients(newIngs: Ingredient[]){
        this.ingredients.push(...newIngs)
        this.ingChange.next(this.ingredients.slice())
    }

    getIngredients(){
        return this.ingredients.slice()
    }
}