import { Component, OnInit } from '@angular/core';
import { ComplaintsService } from '../services/complaints.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrl: './complaints.component.scss'
})
export class ComplaintsComponent implements OnInit{
  constructor(private complaintsService: ComplaintsService,private router:Router) {}
  ngOnInit(): void {
    localStorage.setItem('title','Complaints');
  }
  complaints={
    title:'',
    description:''
  }
  sent(){
    this.complaintsService.SendComplaint(this.complaints).subscribe(
      (res)=>{
        console.log(res)
      },
     (err)=>{
        console.log(err)
       // this.router.navigate(['/employee-dashboard/mes-leave']);
      }
    )
  }
}
