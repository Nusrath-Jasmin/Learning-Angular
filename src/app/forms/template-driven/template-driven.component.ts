import { Component } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent {

  name = '';
  email = '';

  onSubmit() {
    console.log('Form submitted!', this.name, this.email);
  }
  
}
