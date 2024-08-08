import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UsersService } from '../../../services/users/users.service';
import { Router } from '@angular/router';
import { User,Roles } from 'src/app/models/user';

@Component({
  selector: 'app-update-user', // Ensure this selector matches the one used in the template
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {
  @Input() userId!: number;
  @Output() closeUpdateUser = new EventEmitter<void>();

  user!: User;

  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.loadUser();
  }

  loadUser(): void {
    this.userService.getUserById(this.userId).subscribe(
      data => this.user = data,
      error => console.error('Error fetching user', error)
    );
  }

  onSubmit(): void {
    this.userService.updateUser(this.user).subscribe(
      () => this.closeUpdateUser.emit(),
      error => console.error('Error updating user', error)
    );
  }

  onCancel(): void {
    this.closeUpdateUser.emit();
  }
}
