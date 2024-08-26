import { Attendance } from './../models/attendance';
import { Component, OnInit } from '@angular/core';
import { AttendancesService } from '../services/attendances/attendances.service';

@Component({
  selector: 'app-attendances',
  templateUrl: './attendances.component.html',
  styleUrl: './attendances.component.scss'
})
export class AttendancesComponent implements OnInit {
  date: any;
  time: any;
  test: any;
  test2 = true;
  attendance: any;
  attendanceToday = {
    end_time: 0,
    start_time: 0,
  };

  constructor(private attendancesService: AttendancesService) {}

  ngOnInit(): void {
    this.initializePage();
  }

  initializePage() {
    this.testAttendanceToday();
    this.getAttendanceByDate();
    localStorage.setItem('title', 'Attendances');

    const dateTime = new Date();
    const hours = dateTime.getHours();
    const minutes = dateTime.getMinutes();
    this.time = `${hours}:${minutes}`;
    this.date = dateTime.toISOString().split('T')[0];

    const storedTest = localStorage.getItem('test');
    if (storedTest === null || storedTest === '') {
      localStorage.setItem('test', 'false');
    }
    this.test = storedTest;
  }

  PunchIn() {
    this.attendancesService.punchIn().subscribe(
      res => {
        console.log(res);
        localStorage.setItem('test', 'true');
        this.test = 'true';
        this.updateAttendanceData(); // Update data without page reload
      },
      error => {
        console.log(error);
      }
    );
  }

  PunchOut() {
    this.attendancesService.punchOut().subscribe(
      res => {
        console.log(res);
        this.updateAttendanceData(); // Update data without page reload
      },
      error => {
        console.log(error);
      }
    );
  }

  updateAttendanceData() {
    this.testAttendanceToday();
    this.getAttendanceByDate();
  }

  testAttendanceToday() {
    this.attendancesService.testAttendanceToday().subscribe(
      res => {
        if (res === true) {
          localStorage.setItem('test', 'false');
          this.test = 'false';
        }
        console.log(res);
      },
      error => {
        console.log(error);
      }
    );
  }

  getAttendanceByDate() {
    this.attendancesService.getAttendanceByDate().subscribe(
      res => {
        this.attendance = res;
        if (res) {
          this.attendanceToday = this.attendance[0];
        }
        console.log(this.attendanceToday);
      },
      error => {
        console.log(error);
      }
    );
  }
}
