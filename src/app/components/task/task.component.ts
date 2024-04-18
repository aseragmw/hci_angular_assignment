import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from '../../services/tasks.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent implements OnInit {
  taskId : any;
  task : any;

  constructor(public tasksService:TasksService ,public route:ActivatedRoute,public router:Router,public title : Title){this.title.setTitle('Task')}
  ngOnInit(): void {
    this.taskId=this.route.snapshot.paramMap.get('id')
    this.task=this.tasksService.tasks[this.taskId]
  }
  updateTask(){
    this.tasksService.updateTask(this.taskId,this.task);
    this.router.navigate(['/']);
  }
  cancelTask()
 {
  this.router.navigate(['/'])
 }
 deleteTask()
 {
  this.tasksService.deleteTask(this.taskId)
  this.router.navigate(['/'])
 }

}
