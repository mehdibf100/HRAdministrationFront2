import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-body-employee-dashbord',
  templateUrl: './body-employee-dashbord.component.html',
  styleUrl: './body-employee-dashbord.component.scss'
})
export class BodyEmployeeDashbordComponent implements OnInit{
  constructor(private  authService: AuthService,private router: Router) {
  }
  user: any;
  ngOnInit(): void {
    localStorage.setItem('title','Employee Management')

    this.authService.GetuserLogin().subscribe(
      data => {
        console.log(data);
        this.user = data;
      },
      err => {
        console.error(err);
      }
    );
  }
}
