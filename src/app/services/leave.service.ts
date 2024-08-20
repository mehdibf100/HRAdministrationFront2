import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LeaveService {
  private baseUrl = 'http://localhost:8081/api/leave-requests';
  constructor(private http: HttpClient,private router:Router) {}
  ApplyLeave(leave:any){
    return this.http.post(this.baseUrl,leave);
  }
  getLeaves(){
    return this.http.get(this.baseUrl);
  }
  getLeavesById(id:any){
    return this.http.get(this.baseUrl+'/'+id);
  }
}
