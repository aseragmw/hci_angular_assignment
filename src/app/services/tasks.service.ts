import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task';
import { json } from 'stream/consumers';
@Injectable({
  providedIn: 'root'
})
export class TasksService {
  tasks:Task[] = [
    
  ]
  constructor() {
    let storedTasks = localStorage.getItem('tasks')
    if(storedTasks){
      this.tasks=JSON.parse(storedTasks)
    }
    else
    {
      this.tasks=[]
    }
   }

  deleteTask(i:number){
    this.tasks.splice(i,1);
    this.storeTasks()
  }
  saveTask(title:any,description:any,date:any,isCompleted:any)
  {
   this.tasks.push({
     title:title,
     description:description,
     date:date,
     isCompleted:isCompleted
     
   })
   this.storeTasks()
  }
  updateTask(id :any , item:any){
    this.tasks[id]=item;
    this.storeTasks()
  }
  storeTasks(){
    localStorage.setItem('tasks',JSON.stringify(this.tasks))
  }
}