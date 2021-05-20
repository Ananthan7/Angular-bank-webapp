import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  

  // model
  loginForm= this.fb.group({
    acno:['', [Validators.required, Validators.minLength(3), Validators.pattern('[0-9]*')]],
    pswd:['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z0-9]*')]],

  })
  constructor(private router:Router, private dataService:DataService, private fb:FormBuilder) { }

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
    let acno = this.loginForm.value.acno;
    let pswd = this.loginForm.value.pswd;
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
