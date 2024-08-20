import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ComplaintsService {
  private baseUrl = 'http://localhost:8081/api/complaint';
  constructor(private http: HttpClient,private router:Router) {}
  SendComplaint(complaint:any){
    return this.http.post(this.baseUrl,complaint);
  }
}
