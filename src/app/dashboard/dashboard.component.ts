import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  // dacno="";
  // dpswd="";
  // damount="";
  // wacno="";
  // wpswd="";
  // wamount="";
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
  user= this.dataService.currentUser;

  constructor(private dataService:DataService, private fb:FormBuilder) { 
  }

  ngOnInit(): void {
  }
  deposit(){
    var acno=this.depositForm.value.dacno;
    var pswd=this.depositForm.value.dpswd;
    var amount=this.depositForm.value.damount;

    var result=this.dataService.deposit(acno,pswd,amount);
    if(result){
      alert(`The given amount ${amount} has been credited , new balance: ${result}`)
    }
  }
  withdraw(){
    var acno=this.withdrawForm.value.wacno;
    var pswd=this.withdrawForm.value.wpswd;
    var amount=this.withdrawForm.value.wamount;

    var result=this.dataService.withdraw(acno,pswd,amount);
    if(result){
      alert(`The given amount ${amount} has been debited , new balance: ${result}`)
    }
  }

}
