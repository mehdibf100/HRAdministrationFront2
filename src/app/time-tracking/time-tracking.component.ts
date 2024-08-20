import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/projects/projects.service';
import { error } from 'console';
import { TasksService } from '../services/tasks/tasks.service';
type weekDays = 'monday' |'tuesday' |'wednesday' |'thursday' |'friday';

@Component({
  selector: 'app-time-tracking',
  templateUrl: './time-tracking.component.html',
  styleUrl: './time-tracking.component.scss'
})
export class TimeTrackingComponent implements OnInit{
  constructor(private projectService:ProjectService,private taskService:TasksService){}
  project:any;
  selectedDate: any;
  userId:any;
  tasks: any[] = [];

ngOnInit(): void {
  this.selectedDate=new Date();
  const startOfWeek = this.selectedDate
  startOfWeek.setDate(this.selectedDate.getDate() - this.selectedDate.getDay() + 1);

  this.weekDays.monday = this.formatDate(new Date(startOfWeek));
  this.weekDays.tuesday = this.formatDate(this.addDays(startOfWeek, 1));
  this.weekDays.wednesday = this.formatDate(this.addDays(startOfWeek, 2));
  this.weekDays.thursday = this.formatDate(this.addDays(startOfWeek, 3));
  this.weekDays.friday = this.formatDate(this.addDays(startOfWeek, 4));
  this.fetchTasks();
this.projectService.getProjects().subscribe(
  res=>{
    console.log(res);
    this.project=res;
  },
  error=>{
    console.log(error);
  }
)
this.taskService.GetTasksWeek('2024-08-20',5).subscribe(
  res=>{
    console.log(res);
    // const tuesday = <HTMLInputElement>document.getElementById("tuesday");
    // if (tuesday) {
    //   this.task=res;
    //   tuesday.value ="77";
    //}
  },
  error=>{
    console.log(error);
  }
)
}
date:any;
Add() {
  const tr1 = document.getElementById('tr1');

  if (tr1) {
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    td1.colSpan = 5;
    const select1 = document.createElement('select');

    const option1_1 = document.createElement('option');
    option1_1.value = 'option1';
    option1_1.text = 'Select Project';
    select1.appendChild(option1_1);
    for (let i = 0; i < this.project.length; i++){
    const option1_2 = document.createElement('option');
    option1_2.value = this.project[i].name;
    option1_2.text = this.project[i].name;
    select1.appendChild(option1_2);
  }
    td1.appendChild(select1);
    tr.appendChild(td1);


    const td2 = document.createElement('td');
    td2.colSpan = 3;
    const select2 = document.createElement('select');


    const option2_1 = document.createElement('option');
    option2_1.value = 'option1';
    option2_1.text = 'Select Task';
    select2.appendChild(option2_1);
    select1.style.cssText="width: 100%;padding: 5px;height: 40px; box-sizing: border-box;text-align: center; border-radius: 10px;border-color: gainsboro;"
    select2.style.cssText="width: 100%;padding: 5px; height: 40px; box-sizing: border-box;text-align: center; border-radius: 10px;border-color: gainsboro;"

    td2.appendChild(select2);
    tr.appendChild(td2);

      const createTdWithInput = () => {
          const td = document.createElement('td');
          td.colSpan = 3;
          td.style.cssText="padding: 10px;"
          const input = document.createElement('input');
          input.type = 'text';
          input.value="00:00";
          input.style.cssText="width: 100%;padding:5px;box-sizing: border-box;text-align: center; border-radius: 10px;border-color: gainsboro;";
          td.appendChild(input);
          return td;
      };
const tdDel=document.createElement('td');
const iconDel=document.createElement('img');
iconDel.src="https://icons.veryicon.com/png/o/miscellaneous/simple-linetype-icon/trash-96.png";
iconDel.style.width="35px";
iconDel.style.width="25px";
tdDel.appendChild(iconDel);
tdDel.style.display="none";
tr.addEventListener("mouseover", () => {
  tdDel.style.display = "block";
  tdDel.style.marginTop="10px";
});
tr.addEventListener("mouseout", () => {
  tdDel.style.display = "none";
});
tdDel.addEventListener("click",()=>{
tr1.removeChild(tr);
});
      tr.appendChild(createTdWithInput());
      tr.appendChild(createTdWithInput());
      tr.appendChild(createTdWithInput());
      tr.appendChild(createTdWithInput());
      tr.appendChild(createTdWithInput());
      tr.appendChild(createTdWithInput());
      tr.appendChild(tdDel);
      tr.style.cssText="border: none;border-bottom:1px solid gainsboro;";
      tr1.appendChild(tr);
  } else {
      console.error("L'élément avec l'ID 'tr1' n'a pas été trouvé.");
  }
}
weekDays :  { [key in weekDays]:string}={
  monday: '',
  tuesday: '',
  wednesday: '',
  thursday: '',
  friday: '',
};

onDateChange(event: Event) {
  const input = event.target as HTMLInputElement;
  if (!input.value) {
    return;
  }
  const selectedDate = new Date(input.value);
  const startOfWeek = new Date(selectedDate);
  startOfWeek.setDate(selectedDate.getDate() - selectedDate.getDay() + 1);

  this.weekDays.monday = this.formatDate(new Date(startOfWeek));
  this.weekDays.tuesday = this.formatDate(this.addDays(startOfWeek, 1));
  this.weekDays.wednesday = this.formatDate(this.addDays(startOfWeek, 2));
  this.weekDays.thursday = this.formatDate(this.addDays(startOfWeek, 3));
  this.weekDays.friday = this.formatDate(this.addDays(startOfWeek, 4));
}

addDays(date: Date, days: number): Date {
  const result = new Date(date);
  result.setDate(date.getDate() + days);
  return result;
}

formatDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'short',
    day: 'numeric',
    month: 'short'
  };
  return date.toLocaleDateString('en-GB', options);
}
Minus(){
  this.selectedDate.setDate(this.selectedDate.getDate() -7);
  const startOfWeek = this.selectedDate
  startOfWeek.setDate(this.selectedDate.getDate() - this.selectedDate.getDay() + 1);

  this.weekDays.monday = this.formatDate(new Date(startOfWeek));
  this.weekDays.tuesday = this.formatDate(this.addDays(startOfWeek, 1));
  this.weekDays.wednesday = this.formatDate(this.addDays(startOfWeek, 2));
  this.weekDays.thursday = this.formatDate(this.addDays(startOfWeek, 3));
  this.weekDays.friday = this.formatDate(this.addDays(startOfWeek, 4));
}
Plus(){
  this.selectedDate.setDate(this.selectedDate.getDate() +7);
  const startOfWeek = this.selectedDate
  startOfWeek.setDate(this.selectedDate.getDate() - this.selectedDate.getDay() + 1);

  this.weekDays.monday = this.formatDate(new Date(startOfWeek));
  this.weekDays.tuesday = this.formatDate(this.addDays(startOfWeek, 1));
  this.weekDays.wednesday = this.formatDate(this.addDays(startOfWeek, 2));
  this.weekDays.thursday = this.formatDate(this.addDays(startOfWeek, 3));
  this.weekDays.friday = this.formatDate(this.addDays(startOfWeek, 4));
}
getTaksWeek(){
  this.taskService.GetTasksWeek(this.date, 5).subscribe(
    res => {
      console.log(res);
      const tuesday = <HTMLInputElement>document.getElementById("tuesday");
      if (tuesday) {
        tuesday.value = res;
      }
    },
  error=>{
    console.log(error);
  }
)
}
updateWeekDays() {
  const startOfWeek = this.getMonday(new Date(this.selectedDate));
  this.weekDays.monday = startOfWeek.toISOString().split('T')[0];
  this.weekDays.tuesday = this.addDays(startOfWeek, 1).toISOString().split('T')[0];
  this.weekDays.wednesday = this.addDays(startOfWeek, 2).toISOString().split('T')[0];
  this.weekDays.thursday = this.addDays(startOfWeek, 3).toISOString().split('T')[0];
  this.weekDays.friday = this.addDays(startOfWeek, 4).toISOString().split('T')[0];
}

getMonday(date: Date): Date {
  const day = date.getDay(),
        diff = date.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
  return new Date(date.setDate(diff));
}

fetchTasks() {
  const userId = 5;
  this.selectedDate = this.selectedDate.toISOString().split('T')[0];
 alert(this.selectedDate)
  this.taskService.GetTasksWeek(this.selectedDate, userId).subscribe((data: any) => {
    this.tasks = data;
    console.log(data+"gg");
  });
}

getTimeForDay(task: any, day: weekDays): string {
  const dayDate = new Date(this.weekDays[day]);
  const taskDate = new Date(task.date);

  if (dayDate.getTime() === taskDate.getTime()) {
    return this.formatTime(task.hoursSpent);
  }
  return '00:00';
}
formatTime(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`;
  }
}
