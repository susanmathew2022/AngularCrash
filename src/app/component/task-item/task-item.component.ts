import { Component, Input, OnInit } from '@angular/core';

//interface
import {Task} from  '../../interfaces/Tasks'


class TaskItem implements  Task{
  constructor(public reminder:boolean =false,public   day:string ="", public text:string ="", public  id?:number  ){}
}
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
@Input() task: TaskItem = new  TaskItem(false,
  '',
  '',0);
ishappy:boolean = true;

  constructor() {

 //   this.task= new Task()


   }

  ngOnInit(): void {
  }

}
