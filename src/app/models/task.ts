import { User } from './user'; 
import { Project } from './project'; 

export interface Task {
  id?: number; 
  date: string; 
  activityName: string; 
  project: Project; 
  user: User;
}