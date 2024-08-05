import { Component, OnInit } from '@angular/core';
import { Router } from 'express';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profile-employee',
  standalone: true,
  imports: [],
  templateUrl: './profile-employee.component.html',
  styleUrl: './profile-employee.component.scss'
})
export class ProfileEmployeeComponent implements OnInit{
  constructor(private  authService: AuthService) {
  }
  user:any
  ngOnInit(): void {
    this.authService.GetuserLogin().subscribe(
      data => {
        console.log(data);
        this.user = data;
      },
      err => {
        console.error(err); // Affiche l'erreur dans la console
      }
    );
  }

}


