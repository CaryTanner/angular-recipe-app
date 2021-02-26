import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
  exportAs: "appDropdown"
})
export class DropdownDirective {
  private wasInside = false;

  @HostBinding("class.show") isOpen = false;

  
  @HostListener('click') toggleOpen(){
    console.log('directive')
    this.isOpen = !this.isOpen
    this.wasInside = true
  }

  @HostListener('document: click') closeOnOutside(){
    if(!this.wasInside){
      this.isOpen = false
    }
    this.wasInside = false
  }
}
