import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  constructor(public tasksService:TasksService,public title:Title){this.title.setTitle('Home Component')}
  ngOnInit(): void {
  }
  deleteTask(i:number){
    this.tasksService.deleteTask(i);
  }
  toggleCheckbox(i:number) {
    this.tasksService.tasks[i].isCompleted = !this.tasksService.tasks[i].isCompleted;
  }

}