import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent implements OnInit, OnDestroy {

  timer: number = 0;
  subscribeId: Subscription[] = [];
  time: number= 0;
  id!: any;

  constructor(){}

  // Create an observable using the interval function provided by rxjs
  observable = interval(1000);



  //  observable = of(1, 2, 3, 'Hello', [4, 5], { key: 'value' });

  // observable = from([1,2,3,4])

  // ngOnInit(): void {
  //   this.observable.subscribe((value) => console.log(value));   
  // }
  
  ngOnInit(): void {
  
  }

  changetime() {
        this.timer = this.time;
        //Each obesrvable is stored to this id
        const id = this.observable.subscribe((value) => {
          this.timer = this.timer - 1;
          console.log(this.timer);
        //   when the timer reach to zero it will unsubscribe
          if (this.timer <= 0) {
            
            //    this.subscribeId?.[0].unsubscribe()
            //     this.subscribeId.shift()
            for (let i = 0; i < this.subscribeId.length; i++) {
              this.subscribeId[i].unsubscribe();
            }
          }
        });
        console.log(this.subscribeId);
        //The stored id is push to subscribeId
        this.subscribeId.push(id);
      



    // Create a timer app asing setInterval function and assigned its id into the variable intervalId
    // this.intervalId = setInterval(()=>{
    //   this.timer = this.timer - 1
    //   console.log(this.timer)
    //   if(this.timer === 0){
    //     clearInterval(this.intervalId)
    //   }
    // }, 1000)
  }
  

  ngOnDestroy(): void {
    // Remove registered subscription
    this.subscribeId?.[0].unsubscribe();


    // Remove registered interval using clearInterval function 
    // clearInterval(this.intervalId)
  }


}
