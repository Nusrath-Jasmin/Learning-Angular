import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-paret',
  templateUrl: './paret.component.html',
  styleUrls: ['./paret.component.css']
})
export class ParetComponent {

  @ViewChild(ChildComponent) childComponent!:ChildComponent;

  y:string="hi"

  receivedMessage!: string;

  receiveMessage(message: string) {
    this.receivedMessage = message;
  }

  callChildMethod() {
    // Accessing a method of the ChildComponent when the button is clicked
    this.childComponent.childMethod();
  }
}
