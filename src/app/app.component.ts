import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isRecipeShown: boolean = true

  title = 'secondApp';


  onSwitchLink(trueFalse: boolean){
    this.isRecipeShown = trueFalse
  }




}
