import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/projects/projects.service';
import { TasksService } from '../services/tasks/tasks.service';
@Component({
  selector: 'app-time-tracking',
  templateUrl: './time-tracking.component.html',
  styleUrl: './time-tracking.component.scss',
})
export class TimeTrackingComponent implements OnInit{
  constructor(private projectService:ProjectService,private taskService:TasksService){}
  project:any;
  selectedDate: any;
  userId:any;
  tasks:any;
  date:any;
ngOnInit(): void {
  localStorage.setItem('title','Time Tracking');
  this.selectedDate=new Date();
  const startOfWeek = this.selectedDate
  startOfWeek.setDate(this.selectedDate.getDate() - this.selectedDate.getDay() + 1);

  this.weekDays.monday = this.formatDate(new Date(startOfWeek));
  this.weekDays.tuesday = this.formatDate(this.addDays(startOfWeek, 1));
  this.weekDays.wednesday = this.formatDate(this.addDays(startOfWeek, 2));
  this.weekDays.thursday = this.formatDate(this.addDays(startOfWeek, 3));
  this.weekDays.friday = this.formatDate(this.addDays(startOfWeek, 4));

this.projectService.getProjects().subscribe(
  res=>{
    console.log(res);
    this.project=res;
  },
  error=>{
    console.log(error);
  }
)
this.userId=sessionStorage.getItem('id');
this.getTaksWeek();
setTimeout(() => {
  //this.total();
}, 200);

}
Add() {
  const tr1 = document.getElementById('tr1');
  let selectedDate=this.selectedDate.toISOString().split('T')[0];
let task={};
  if (tr1) {
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    td.colSpan = 5;
    const select1 = document.createElement('select');

    const option1_1 = document.createElement('option');
    option1_1.value = 'option1';
    option1_1.text = 'Select Project';
    select1.appendChild(option1_1);
    for (let i = 0; i < this.project.length; i++){
    const option1_2 = document.createElement('option');
    option1_2.value = this.project[i].id;
    option1_2.text = this.project[i].name;
    select1.appendChild(option1_2);
    select1.style.cssText="width: 90%;padding: 5px;height: 40px; box-sizing: border-box;text-align: center; border-radius: 10px;border-color: gainsboro;"

  }
    td.appendChild(select1);
    tr.appendChild(td);


    const td0 = document.createElement('td');
    td0.colSpan = 3;
    const input0 = document.createElement('input');
          input0.type = 'text';
          input0.value="";
          input0.placeholder="Task"
          input0.style.cssText="width: 100%;padding:5px;box-sizing: border-box;text-align: center; border-radius: 10px;border-color: gainsboro;";
          td0.appendChild(input0);

    tr.appendChild(td0);

          const td1 = document.createElement('td');
          td1.colSpan = 3;
          td1.style.cssText="padding: 10px;"
          const input1 = document.createElement('input');
          input1.type = 'text';
          input1.value="00:00";

          input1.style.cssText="width: 100%;padding:5px;box-sizing: border-box;text-align: center; border-radius: 10px;border-color: gainsboro;";

          td1.appendChild(input1);
          const td2 = document.createElement('td');
          td2.colSpan = 3;
          td2.style.cssText="padding: 10px;"
          const input2 = document.createElement('input');
          input2.type = 'text';
          input2.value="00:00";
          input2.style.cssText="width: 100%;padding:5px;box-sizing: border-box;text-align: center; border-radius: 10px;border-color: gainsboro;";
          td2.appendChild(input2);

          const td3 = document.createElement('td');
          td3.colSpan = 3;
          td3.style.cssText="padding: 10px;"
          const input3 = document.createElement('input');
          input3.type = 'text';
          input3.value="00:00";
          input3.style.cssText="width: 100%;padding:5px;box-sizing: border-box;text-align: center; border-radius: 10px;border-color: gainsboro;";
          td3.appendChild(input3);

          const td4 = document.createElement('td');
          td4.colSpan = 3;
          td4.style.cssText="padding: 10px;"
          const input4 = document.createElement('input');
          input4.type = 'text';
          input4.value="00:00";
          input4.style.cssText="width: 100%;padding:5px;box-sizing: border-box;text-align: center; border-radius: 10px;border-color: gainsboro;";
          td4.appendChild(input4);

          const td5 = document.createElement('td');
          td5.colSpan = 3;
          td5.style.cssText="padding: 10px;"
          const input5 = document.createElement('input');
          input5.type = 'text';
          input5.value="00:00";
          input5.style.cssText="width: 100%;padding:5px;box-sizing: border-box;text-align: center; border-radius: 10px;border-color: gainsboro;";
          td5.appendChild(input5);

          const tdT = document.createElement('td');
          tdT.colSpan = 3;
          tdT.style.cssText="padding: 10px;"
          const inputT = document.createElement('input');
          inputT.type = 'text';
          inputT.value="00:00";
          inputT.style.cssText="width: 100%;padding:5px;box-sizing: border-box;text-align: center; border-radius: 10px;border-color: gainsboro;";
          tdT.appendChild(inputT);
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
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td4);
      tr.appendChild(td5);
      tr.appendChild(tdT);
      tr.appendChild(tdDel);
      tr.style.cssText="border: none;border-bottom:1px solid gainsboro;";
      tr1.appendChild(tr);
      document.getElementById("save")?.addEventListener("click",()=>{
        task = {
          date: selectedDate,
          activityName: input0.value,
          monday: input1.value,
          tuesday: input2.value,
          wednesday: input3.value,
          thursday: input4.value,
          friday:input5.value,
          project: {
            id:Number(select1.value)
          },
          user: {
            id: 5
          }
        };
        this.taskService.AddTasks(task).subscribe(
          res=>{
            console.log(res);
          },
          error=>{
            console.log(error);
          }
        )
      })

  } else {
      console.error("L'élément avec l'ID 'tr1' n'a pas été trouvé.");
  }
}
weekDays = {
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

  this.selectedDate = new Date(input.value);

  const startOfWeek = new Date(this.selectedDate);
  startOfWeek.setDate(this.selectedDate.getDate() - this.selectedDate.getDay() + 1);

  this.weekDays.monday = this.formatDate(new Date(startOfWeek));
  this.weekDays.tuesday = this.formatDate(this.addDays(startOfWeek, 1));
  this.weekDays.wednesday = this.formatDate(this.addDays(startOfWeek, 2));
  this.weekDays.thursday = this.formatDate(this.addDays(startOfWeek, 3));
  this.weekDays.friday = this.formatDate(this.addDays(startOfWeek, 4));
  this.getTaksWeek();
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
  this.getTaksWeek();
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
  this.getTaksWeek();
}
getTaksWeek(){
  const selectedDate=this.selectedDate.toISOString().split('T')[0];
this.taskService.GetTasksWeek(selectedDate,2).subscribe(
  res=>{
    this.tasks=res;
    console.log(this.tasks);

  },
  error=>{
    console.log(error);
  }
)
}
save(){
  for(let i=0;i<=this.tasks.length;i++){
  this.taskService.AddTasks(this.tasks[i]).subscribe(
    res=>{
      console.log(res);
      window.location.reload();
    }
  ,
  error=>{
    console.log(error)
  })
}}
deleteTask(id:any){
this.taskService.DeleteTask(id).subscribe(
  res=>{
    console.log(res);
    window.location.reload();
  },
  error=>{
    console.log(error);
  }
)
}

totalDay="00:00"
// total(){
//   let [hours, minutes]='';
//   for(let i=0;i<=this.tasks.length;i++){
//     let mon=this.tasks[i].monday;
//      [hours, minutes] = mon.split(':').map(Number);
//     hours += hours;
//     minutes += minutes;
//   }
//   this.totalDay=`${hours}:${minutes}`;
//   alert(this.tasks)
// }
}
