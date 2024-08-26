import { Task } from './../../models/task';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http:HttpClient) { }
  private url="http://localhost:8081/api/tasks";
  GetTasksWeek(date:string,userId:number):Observable<any>{
    return this.http.get<any>(`${this.url}/week`, {params:{
      userId,
      date
    }});
  }
  AddTasks(tasks:any):Observable<any>{
    return this.http.post(this.url, tasks);
  }
  DeleteTask(id:any):Observable<any>{
    return this.http.delete(`${this.url}/${id}`);
  }
}
