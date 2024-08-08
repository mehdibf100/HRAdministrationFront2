import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/models/user';
@Injectable({
  providedIn: 'root'
})
export class UsersService {


  private apiUrl = `${environment.apiUrl}/auth`;

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/user`);
  }

  getEmployees(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/user/employee`);
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/user/${id}`);
  }

  getEmployeeById(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/user/employee/${id}`);
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/signup`, user);
  }

  updateUser(userId: number, user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/user/update-user/`, user);
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getCurrentUser(): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/user/authenticiated`);
  }

}
