import { Injectable, EventEmitter } from "@angular/core";

import { Ingredient } from "src/models/ingredient.model";
import {Subject} from 'rxjs'

@Injectable({
    providedIn: 'root'
})
export class ShoppingService{
    ingChange = new  Subject<Ingredient[]>()
    editingItem = new Subject<number>()
    //ingChange: EventEmitter<Ingredient[]> = new EventEmitter<Ingredient[]>()
    private ingredients: Ingredient[] = [new Ingredient('apples', 5), new Ingredient('fish', 2)]

    addIngredients(newIngs: Ingredient[]){
        this.ingredients.push(...newIngs)
        this.ingChange.next(this.ingredients.slice())
    }

    getIngredients(){
        return this.ingredients.slice()
    }
    getIngredient(index: number){
        return this.ingredients[index]
    }

    editIng(index: number, ingredient: Ingredient){
        this.ingredients.splice(index, 1, ingredient)
        this.ingChange.next(this.ingredients.slice())
    }

    deleteIng(index: number){
        this.ingredients.splice(index, 1)
        this.ingChange.next(this.ingredients.slice())
    }





}