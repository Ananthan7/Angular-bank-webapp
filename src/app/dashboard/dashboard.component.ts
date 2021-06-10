import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
 
  depositForm=this.fb.group({
    dacno:['', [Validators.required,Validators.minLength(3), Validators.pattern('[0-9]*')]],
    dpswd:['', [Validators.required,Validators.minLength(3), Validators.pattern('[a-zA-Z0-9]*')]],
    damount:['', [Validators.required, Validators.pattern('[0-9]*')]],

  })

  withdrawForm=this.fb.group({
    wacno:['', [Validators.required,Validators.minLength(3), Validators.pattern('[0-9]*')]],
    wpswd:['', [Validators.required,Validators.minLength(3), Validators.pattern('[a-zA-Z0-9]*')]],
    wamount:['', [Validators.required, Validators.pattern('[0-9]*')]],

  })
  user:any;

  constructor(private dataService:DataService, private fb:FormBuilder,private router:Router) { 
    this.user = localStorage.getItem("name")
  }

  ngOnInit(): void {
  }
  deposit(){
    var acno=this.depositForm.value.dacno;
    var pswd=this.depositForm.value.dpswd;
    var amount=this.depositForm.value.damount;

    if(this.depositForm.valid){
     
      this.dataService.deposit(acno,pswd,amount)
        .subscribe((result:any)=>{
        if(result){
          alert(result.message)
         
         }},      
      (result:any)=>{
        alert(result.error.message)
      })
    }
    else{
      alert("Invalid Form")
    }
  }
  withdraw(){
    var acno=this.withdrawForm.value.wacno;
    var pswd=this.withdrawForm.value.wpswd;
    var amount=this.withdrawForm.value.wamount;
    if(this.withdrawForm.valid){
     
      this.dataService.withdraw(acno,pswd,amount)
        .subscribe((result:any)=>{
        if(result){
          alert(result.message)
         
         }},      
      (result:any)=>{
        alert(result.error.message)
      })
     
    }
    else{
      alert("Invalid Form")
    }
  }

}
