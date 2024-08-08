import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users/users.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  showAddUser: boolean = false;
  showUpdateUser: boolean = false;
  userIdToUpdate?: number;

  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe(
      data => this.users = data,
      error => console.error('Error fetching users', error)
    );
  }

  toggleAddUser(): void {
    this.showAddUser = !this.showAddUser;
    if (this.showAddUser) {
      this.showUpdateUser = false;
    }
  }

  toggleUpdateUser(userId?: number): void {
    this.userIdToUpdate = userId;
    this.showUpdateUser = true;
    this.showAddUser = false;
  }

  deleteUser(id?: number): void {
    if (id !== undefined) {
      this.userService.deleteUser(id).subscribe(
        () => {
          console.log('User deleted:', id);
          this.loadUsers();
        },
        (error) => {
          console.error('Error deleting user', error);
        }
      );
    } else {
      console.error('User ID is undefined');
    }
  }

  onAddUserClose(): void {
    this.showAddUser = false;
    this.loadUsers();
  }

  onUpdateUserClose(): void {
    this.showUpdateUser = false;
    this.loadUsers();
  }
}
