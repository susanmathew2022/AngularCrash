import { Component, Input, OnInit } from '@angular/core';

//interface
import {Task} from  '../../interfaces/Tasks'
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
@Input() newtask?: Task;
  constructor() { }

  ngOnInit(): void {
  }

}
