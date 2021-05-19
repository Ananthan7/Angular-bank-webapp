import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dacno="";
  dpswd="";
  damount="";
  wacno="";
  wpswd="";
  wamount="";
  constructor(private dataService:DataService) { 
  }

  ngOnInit(): void {
  }
  deposit(){
    var acno=this.dacno;
    var pswd=this.dpswd;
    var amount=this.damount;

    var result=this.dataService.deposit(acno,pswd,amount);
    if(result){
      alert(`The given amount ${amount} has been credited , new balance: ${result}`)
    }
  }
  withdraw(){
    var acno=this.wacno;
    var pswd=this.wpswd;
    var amount=this.wamount;

    var result=this.dataService.withdraw(acno,pswd,amount);
    if(result){
      alert(`The given amount ${amount} has been debited , new balance: ${result}`)
    }
  }

}
