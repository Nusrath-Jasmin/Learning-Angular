import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector:'[highLight]'
})


export class HighLightDirective implements OnInit{

    constructor(private elementref:ElementRef){}

    //setting directive on template
    ngOnInit(){
        this.elementref.nativeElement.style.backgroundColor='yellow'
    }


   
}