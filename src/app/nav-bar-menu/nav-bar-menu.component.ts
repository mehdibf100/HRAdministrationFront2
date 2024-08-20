import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-nav-bar-menu',
  templateUrl: './nav-bar-menu.component.html',
  styleUrl: './nav-bar-menu.component.scss'
})
export class NavBarMenuComponent {
  constructor(private  authService: AuthService,private router: Router,private location: Location) {
  }
  activeButton: string = '';
  setActive(button: string): void {
    this.activeButton = button;
  }
  goBack(): void {
    this.location.back();
  }
  logout() {
    sessionStorage.clear();
   this.router.navigate(['/login']);
  }
}
