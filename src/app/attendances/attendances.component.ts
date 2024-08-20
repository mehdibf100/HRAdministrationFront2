import { Attendance } from './../models/attendance';
import { Component, OnInit } from '@angular/core';
import { AttendancesService } from '../services/attendances.service';
import { error } from 'console';

@Component({
  selector: 'app-attendances',
  templateUrl: './attendances.component.html',
  styleUrl: './attendances.component.scss'
})
export class AttendancesComponent implements  OnInit{
  constructor(private attendancesService: AttendancesService) {}
  date:any;
  time:any;
  test:any;
  test2=true;
  attendance:any;
  attendanceToday:any;
  ngOnInit(): void {
    let dateTime = new Date()
    let hours = dateTime.getHours();
    let minutes = dateTime.getMinutes();
    this.time=`${hours}:${minutes}`
    this.date=dateTime;
    console.log(this.date);
    this.date = this.date.toISOString().split('T')[0];
    const a = localStorage.getItem('test');
    if (a === null || a === '') {
      localStorage.setItem('test', 'false');
    }
    this.test=localStorage.getItem('test');
    this.attendancesService.getAttendanceForConnectedUser().subscribe(
      res=>{
        console.log(res);
        this.attendance=res;
        let test3=0;
        for(let i=0;i<=this.attendance.length;i++){
          if(this.attendance[i].date===this.date){
              console.log(this.attendance[i]);
              this.attendanceToday=this.attendance[i];
           }
        }
      },
      error=>{
        console.log(error);
      }
    )

  }
  PunchIn(){
this.attendancesService.punchIn().subscribe(
  res=>{
    console.log(res);
    localStorage.setItem('test','true')
    this.test=localStorage.getItem('test');
    window.location.reload();
  },
  error=>{
    console.log(error);
  }
)
  }

  PunchOut(){
    this.attendancesService.punchOut().subscribe(
      res=>{
        console.log(res);
        window.location.reload();
      },
      error=>{
        console.log(error);
      }
    )
  }
}
