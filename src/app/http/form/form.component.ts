import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from 'src/app/model/task';
import { map } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

  data!:Task
  allData:Task[]=[]
  http:HttpClient=inject(HttpClient)
  @ViewChild('form') form!: NgForm;
  editMode=false
  updateId!:string|undefined

  ngOnInit(): void {
    this.fetchData()
  }

  //http post method
  OnFormSubmitted(form:NgForm){
    if(!this.editMode){
    const header=new HttpHeaders({'my-header':"hello-world"})
    this.data=form.value
    console.log(this.data)
    this.http.post<{name:string}>('https://angular-learning-a68d6-default-rtdb.firebaseio.com/task.json',this.data,{headers:header})
    .subscribe();
    }
    else{
      this.updateTask()
    }
  }


  //http get
  private fetchData(){
    this.http.get<{[key:string]:Task}>('https://angular-learning-a68d6-default-rtdb.firebaseio.com/task.json')
    .pipe(map((response)=>{
      //trasnform data
      let tasks: any[]=[]

      for(let key in response){
        if(response.hasOwnProperty(key))
        tasks.push({...response[key],id:key})
      }

      return tasks;
    }))
    .subscribe((datas)=>{
      this.allData=datas
      console.log(datas);
      
    },
    //handle http error
    (error)=>{
      console.log(error);
      
    });
  }

  //http delete method
  OnDelete(id:string|undefined){

    this.http.delete('https://angular-learning-a68d6-default-rtdb.firebaseio.com/task/'+id+'.json')
    .subscribe()

  } 

  //http put method
  update(id:string|undefined){

    let currentTask=this.allData.find((p)=>{return p.id===id})

    if (currentTask) {
      this.form.setValue({
        title: currentTask.title || '',
        description: currentTask.desc || '',
        assignedTo: currentTask.assignedto || '',
        createdAt: currentTask.createdAt || '',
        priority: currentTask.priority || '',
        status: currentTask.ststus  || ''
      });
    }

    this.editMode=true
    this.updateId=id
  }

  //perform update using put
  updateTask(){

    //using put
    // this.http.put('https://angular-learning-a68d6-default-rtdb.firebaseio.com/task/'+this.updateId+'.json',this.form.value)
    // .subscribe()
    // console.log("updated");


    //using patch
    this.http.patch('https://angular-learning-a68d6-default-rtdb.firebaseio.com/task/'+this.updateId+'.json',{assigneTo:"jas",
    description:"imporatnt",status:"to-do"
    })
    .subscribe()
    console.log("updated");
    

  }
}
