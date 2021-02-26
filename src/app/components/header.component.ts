import {Component, Output, EventEmitter} from '@angular/core'


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',

})

export class HeaderComponent{
@Output() showRecipes: EventEmitter<Boolean> = new EventEmitter<boolean>()

    constructor(){}

 onSwitchLink(isRecipeShown: boolean){
    this.showRecipes.emit(isRecipeShown) 
 }   
}