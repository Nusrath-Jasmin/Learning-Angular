import { Component, Input, OnInit,Output,EventEmitter,ElementRef, ViewChild,} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() x!: string;
  @Output() messageEvent = new EventEmitter<string>();
  @ViewChild('myInput', { static: false }) myInput!: ElementRef;
  

  constructor(){}


  
  ngOnInit(): void {
  
  }

  sendMessage() {
    this.messageEvent.emit('Hello from the child!');
  }

  childMethod() {
    console.log('Method in child component called.');
  }


  logInputValue() {
    // Accessing the value property of the input element using the local reference
    console.log('Input Value:', this.myInput.nativeElement.value);
  }
}
