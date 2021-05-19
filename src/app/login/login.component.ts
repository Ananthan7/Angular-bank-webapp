import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  aim="banking partner"
  acno="";
  pswd="";

  constructor(private router:Router, private dataService:DataService) { }

  ngOnInit(): void {
  }
  
  // datas
  

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
    const users=this.dataService.login(acno,pswd);
    if(users){
      this.router.navigateByUrl("dashboard")
    }
    else{
      alert("invalid password")
    }
  }

  register(){
    this.router.navigateByUrl('register')
  }
  

}
