import { Component, OnInit } from '@angular/core';
import { LeaveService } from '../services/leave.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrl: './apply-leave.component.scss'
})
export class ApplyLeaveComponent  implements OnInit{
 startDate?: Date | string;
 endDate?: Date | string;
 period?: number;
 typeLeave: any;
 reason: string = '';
 leave: any = {};
 constructor(private leaveService: LeaveService,private router:Router) {}
  ngOnInit(): void {
    localStorage.setItem('title','Apply Leave');
  }

  calculDate() {
    if (this.startDate && this.period !== undefined) {
      if (typeof this.startDate === 'string') {
        this.startDate = new Date(this.startDate);
      }

      if (typeof this.endDate === 'string') {
        this.endDate = new Date(this.endDate);
      }

      const periodAsNumber = Number(this.period);
      if (!isNaN(periodAsNumber) && this.startDate instanceof Date) {
        this.endDate = new Date(this.startDate);
        this.endDate.setDate(this.startDate.getDate() + periodAsNumber);
        this.endDate = this.endDate.toISOString().split('T')[0];
        this.startDate = this.startDate.toISOString().split('T')[0];
      } else {
        console.error("Période non valide");
      }
    } else {
      console.error("Date ou période non définie");
    }
    this.leave.startDate = this.startDate;
    this.leave.endDate = this.endDate;
    this.leave.reason = this.typeLeave;
console.log(this.leave);
    this.leaveService.ApplyLeave(this.leave).subscribe(
      (res)=>{
        console.log(res)
        this.router.navigate(['/employee-dashboard/mes-leave']);

      },
     (err)=>{
        console.log(err)
      }
    )
  }
}
