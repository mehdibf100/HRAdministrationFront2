// src/app/projects/projects.component.ts
import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/projects/projects.service';
import { Project } from '../models/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];

  constructor(private projectsService: ProjectService) { }

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects(): void {
    this.projectsService.getProjects().subscribe(
      (data) => {
        console.log('Projects fetched:', data); 
        this.projects = data;
      },
      (error) => {
        console.error('Error fetching projects', error);
      }
    );
  }
  updateProject(id: number | undefined): void {
    if (id !== undefined) {
      console.log('project id:', id);
    } else {
      console.error('Project ID is undefined');
    }
  }
  deleteProject(id?: number): void {
    this.projectsService.deleteProject(id).subscribe(
      () => {
        console.log('Project deleted:', id);
        this.loadProjects();
      },
      (error) => {
        console.error('Error deleting project', error);
      }
    );
  }

}
