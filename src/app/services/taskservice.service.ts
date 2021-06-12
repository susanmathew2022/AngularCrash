import { Injectable } from '@angular/core';
//mockdata
import {TASKS} from '../mock-task';
//interface
import {Task} from  '../interfaces/Tasks'
@Injectable({
  providedIn: 'root'
})
export class TaskserviceService {

  constructor() { }
    getTasks():Task[] {
      return TASKS;
    }
}
