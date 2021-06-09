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
  
  login(){
    let acno = this.loginForm.value.acno;
    let pswd = this.loginForm.value.pswd;
    if(this.loginForm.valid){
      this.dataService.login(acno,pswd)
      .subscribe((result:any)=>{
        if(result){
          alert(result.message)
          localStorage.setItem("name", result.name)
          this.router.navigateByUrl('/dashboard')
        }
      },
      (result)=>{
        alert(result.error.message)
      })
    }
  }
}
