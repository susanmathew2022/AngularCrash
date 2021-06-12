import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

//interface
import {Task} from  '../../interfaces/Tasks'
//fontawesome angular
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FaStackItemSizeDirective } from '@fortawesome/angular-fontawesome';
class TaskItem implements  Task{
  constructor(public reminder:boolean =false,public   day:string ="", public text:string ="", public  id?:number  ){}
}
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
@Input() task: TaskItem = new  TaskItem(false,  '',  '',0);
@Output() ondeletetask: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;

  constructor() {
console.log("cosntructor");
 //   this.task= new Task()


   }

  ngOnInit(): void {
  }
  OnDelete(task){
    this.ondeletetask.emit(task);
  }


}
