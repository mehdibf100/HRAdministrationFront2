import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
import { Project } from 'src/app/models/project';
import { Roles, User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users/users.service';
import { TaskService } from 'src/app/services/tasks/tasks.service';
import { ProjectService } from 'src/app/services/projects/projects.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  showAddTask = false;
  showUpdateTask = false;
  taskIdToUpdate: number | undefined;
  tasks: Task[] = [];
  projects: Project[] = [];
  users: User[] = [];
  newTask: Task = { activityName: '', date: '', project: {
    id: 0,
    name: '',
    tasks: []
  }, user: {
    id: 0,
    email: '',
    password: '',
    role: Roles.ROLE_EMPLOYEE,
    baseSalary: 0,
    firstname: '',
    lastname: '',
    job: '',
    tasks: []
  } };

  constructor(
    private taskService: TaskService,
    private projectService: ProjectService,
    private userService: UsersService
  ) { }

  ngOnInit(): void {
    this.loadTasks();
    this.loadProjects();
    this.loadUsers();
  }

  loadTasks(): void {
    this.taskService.getAllTasks().subscribe(
      (data) => {
        console.log('Tasks fetched:', data);
        this.tasks = data;
      },
      (error) => {
        console.error('Error fetching tasks', error);
      }
    );
  }

  loadProjects(): void {
    this.projectService.getProjects().subscribe(
      (data) => {
        this.projects = data;
      },
      (error) => {
        console.error('Error fetching projects', error);
      }
    );
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe(
      (data) => {
        this.users = data;
      },
      (error) => {
        console.error('Error fetching users', error);
      }
    );
  }

  deleteTask(id?: number): void {
    if (id !== undefined) {
      this.taskService.deleteTask(id).subscribe(
        () => {
          console.log('Task deleted:', id);
          this.loadTasks();
        },
        (error) => {
          console.error('Error deleting task', error);
        }
      );
    } else {
      console.error('Task ID is undefined');
    }
  }

  toggleAddTask(): void {
    this.showAddTask = !this.showAddTask;
    if (this.showAddTask) {
      this.showUpdateTask = false;
      this.taskIdToUpdate = undefined;
      this.newTask = { activityName: '', date: '', project: {
        name: '',
        tasks: []
      }, user: {
        firstname: '',
        lastname: '',
        role: Roles.ROLE_EMPLOYEE,
        email: '',
        password: '',
        tasks: []
      } };
    }
  }

  onAddTaskClose(): void {
    this.showAddTask = false;
    this.loadTasks();
  }

  toggleUpdateTask(id?: number): void {
    this.taskIdToUpdate = id;
    this.showUpdateTask = !this.showUpdateTask;
    if (this.showUpdateTask) {
      this.showAddTask = false;
      this.loadTaskForUpdate(id);
    }
  }

  loadTaskForUpdate(id?: number): void {
    if (id !== undefined) {
      this.taskService.getTaskById(id).subscribe(
        (data) => {
          this.newTask = data;
        },
        (error) => {
          console.error('Error fetching task', error);
        }
      );
    }
  }

  onUpdateTaskClose(): void {
    this.showUpdateTask = false;
    this.taskIdToUpdate = undefined;
    this.loadTasks();
  }

  onSubmit(): void {
    if (this.taskIdToUpdate !== undefined) {
      this.taskService.updateTask(this.taskIdToUpdate, this.newTask).subscribe(
        () => {
          console.log('Task updated:', this.taskIdToUpdate);
          this.onUpdateTaskClose();
        },
        (error) => {
          console.error('Error updating task', error);
        }
      );
    } else {
      this.taskService.createTask(this.newTask).subscribe(
        () => {
          console.log('Task added:', this.newTask);
          this.onAddTaskClose();
        },
        (error) => {
          console.error('Error adding task', error);
        }
      );
    }
  }

  onCancel(): void {
    this.showAddTask = false;
    this.showUpdateTask = false;
  }
}
