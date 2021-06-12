import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
//interface
import {Task} from  '../../interfaces/Tasks'
import {TaskserviceService} from '../../services/taskservice.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  constructor(private taskService:TaskserviceService) { }
 
  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }

}
