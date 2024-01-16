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

  //  observable = of(1, 2, 3, 'Hello', [4, 5], { key: 'value' });

  // observable = from([1,2,3,4])

  // observable = interval(1000);

  // ngOnInit(): void {
  //   this.observable.subscribe((value) => console.log(value));   
  // }


}
