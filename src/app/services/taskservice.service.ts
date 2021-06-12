import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs'
//mockdata
import {TASKS} from '../mock-task';
//interface
import {Task} from  '../interfaces/Tasks'
@Injectable({
  providedIn: 'root'
})
export class TaskserviceService {

  constructor() { }
    getTasks():Observable<Task[]> {
      const tasks = of(TASKS);
      return tasks;
    }
}
