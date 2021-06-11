import { Component, OnInit } from '@angular/core';
//mockdata
import {TASKS} from '../../mock-task';
//interface
import {Task} from  '../../interfaces/Tasks'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = TASKS;
  constructor() { }
 
  ngOnInit(): void {
  }

}
