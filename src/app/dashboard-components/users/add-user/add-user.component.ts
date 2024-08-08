import { Component, EventEmitter, Output } from '@angular/core';
import { UsersService } from '../../../services/users/users.service';
import { Router } from '@angular/router';
import { User, Roles } from 'src/app/models/user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {
  @Output() closeAddUser = new EventEmitter<void>();

user: User = {
  email: '',
  password: '',
  role: Roles.ROLE_EMPLOYEE,
  firstname: '',
  lastname: '',
  job: '',
  datejoined: '', 
  baseSalary: 0,
};

  roles = Object.values(Roles);

  constructor(private userService: UsersService, private router: Router) {}

  onSubmit(): void {
    const userPayload = {
      email: this.user.email,
      role: this.user.role,
      password: this.user.password,
      user: {
        firstname: this.user.firstname,
        lastname: this.user.lastname,
        job: this.user.job,
        datejoined: this.user.datejoined,
        baseSalary: this.user.baseSalary,
      }
    };
  
    console.log('Submitting user:', userPayload); 
  
    this.userService.addUser(userPayload).subscribe(
      (response) => {
        console.log('User added successfully:', response);
        this.closeAddUser.emit();
      },
      (error) => {
        console.error('Error adding user:', error);
      }
    );
  }
    
  onCancel(): void {
    this.closeAddUser.emit();
  }
}
