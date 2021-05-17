import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  aim="banking partner";
  acno="Account number";
  pswd="";

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  
  // datas
  accountDetails:any = {
      1000: { acno: 1000, actype: "savings", username: "userone", password: "userone", balance: 50000 },
      1001: { acno: 1001, actype: "savings", username: "usertwo", password: "usertwo", balance: 5000 },
      1002: { acno: 1002, actype: "current", username: "userthree", password: "userthree", balance: 10000 },
      1003: { acno: 1003, actype: "current", username: "userfour", password: "userfour", balance: 6000 }
  }

  // fetch values
  // accnoChange(event:any){
  //   this.accno=event.target.value;
  //   console.log(this.accno);
    

  // }
  // pswdChange(event:any){
  //   this.pswd=event.target.value;
  //   console.log(this.pswd);
    
  // }
  // login event binding
  login(){
    let acno = this.acno;
    let pswd = this.pswd;
    // var account = this.accno;
    // var pswd = this.pswd;
    let users = this.accountDetails;
    if(acno in users){
      if(pswd == users[acno]["password"]){
        alert("login successful")
        this.router.navigateByUrl("dashboard")
      }else{
        alert("invalid password")
      }
    }else{
      alert("invalid account number")
      
    }
  }
  

}
