import { Component, OnInit } from '@angular/core';
import { from, interval, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Show Timer';
  showChild: boolean = false

  showTimer(){
    this.showChild = !this.showChild
    this.title = this.showChild === true ? 'Hide Timer' : 'Show Timer'
  }

}
