import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  // uname="";
  // acno="";
  // pswd="";

  // from builder
  registerForm= this.fb.group({
    uname:['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
    acno:['', [Validators.required,Validators.minLength(4), Validators.pattern('[0-9]*')]],
    pswd:['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],

  })

  constructor(private dataService:DataService, private router:Router, private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  // reactive form builder
  register(){
    if(this.registerForm.get('uname')?.errors){
      alert("invalid username")
    } else if(this.registerForm.get('acno')?.errors){
      alert("invalid account number min 4 numbers")
    } else if(this.registerForm.get('pswd')?.errors){
      alert("invalid password")
    }
    if(this.registerForm.valid){
      let uname=this.registerForm.value.uname;
      let accno=this.registerForm.value.acno;
      let pswd=this.registerForm.value.pswd;
      const user=this.dataService.register(uname,accno,pswd)   
      if(user){
        alert("Successfully registerd")
        this.router.navigateByUrl('')
      }else{
        alert("User already exists")
      }
    }
    
  }
  

  // register(){
  //   let uname=this.uname;
  //   let accno=this.acno;
  //   let pswd=this.pswd;
  //   const user=this.dataService.register(uname,accno,pswd)   
  //   if(user){
  //     alert("Successfully registerd")
  //     this.router.navigateByUrl('')
  //   }else{
  //     alert("User already exists")
  //   }
  // }


}
