import { style } from '@angular/animations';
import { LeaveService } from './../services/leave.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-mes-leave',
  templateUrl: './mes-leave.component.html',
  styleUrl: './mes-leave.component.scss'
})
export class MesLeaveComponent implements OnInit{
  constructor(private  leaveService: LeaveService) {
  }
  leaves:any
  //id=sessionStorage.getItem('id');
  ngOnInit():void{
    this.leaveService.getLeaves().subscribe(
      (res)=>{
        console.log(res+"yjtdytft")
        this.leaves=res;
        this.leaves=this.leaves.reverse();
      },
     (err)=>{
        console.log(err)
      }
    )
  }
  // this.leaveService.getLeavesById(this.id).subscribe(
  //   (res)=>{
  //     console.log(res)
  //     this.leaves=res;
  //     alert(this.leaves)
  //   },
  //  (err)=>{
  //     console.log(err)
  //   }
  // )
}


