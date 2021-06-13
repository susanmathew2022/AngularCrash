import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http'
//mockdata
import {TASKS} from '../mock-task';
//interface
import {Task} from  '../interfaces/Tasks'
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskserviceService {
private ApiUrl='http://localhost:5000/tasks';


  constructor(private http:HttpClient) { }
    getTasks():Observable<Task[]> {
     // const tasks = of(TASKS);
      //return tasks;

      return this.http.get<Task[]>(this.ApiUrl)
    }

    deleteTask(task:Task): Observable<Task> {
      const url = `${this.ApiUrl}/${task.id}`;
      return this.http.delete<Task>(url);

    }
    updateTaskReminder(task:Task): Observable<Task> {
      const url = `${this.ApiUrl}/${task.id}`;
      return this.http.put<Task>(url,task,httpOptions);
    }


}
