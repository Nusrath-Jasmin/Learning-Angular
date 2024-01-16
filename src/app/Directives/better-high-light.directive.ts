import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHighLight]',
})
export class BetterHighLightDirective implements OnInit {
  constructor(private elref: ElementRef, private renderer: Renderer2) {}


  ngOnInit() {
    // this.renderer.setStyle(this.elref.nativeElement,'background-color','blue');
  }

  @HostBinding('style.backgroundColor') backgroundColor:string='transparent'


  //using hostlistener to set directives on certain events
  @HostListener('mouseenter',['$event'])
   mouseenter(eventData: Event) {
    // this.renderer.setStyle(this.elref.nativeElement,'background-color','blue');

    //using hostbinding
    this.backgroundColor="blue"


    console.log(eventData);
    console.log("it is...");
    
  }


  @HostListener('mouseleave') mouseleave() {
    this.renderer.setStyle(this.elref.nativeElement,'background-color','transparent');
  }
}
