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

  // from builder MODEL 
  registerForm= this.fb.group({
    uname:['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
    acno:['', [Validators.required,Validators.minLength(4), Validators.pattern('[0-9]*')]],
    pswd:['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],

  })

  constructor(private dataService:DataService, private router:Router, private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  register(){

    if(this.registerForm.valid){
      let uname=this.registerForm.value.uname;
      let accno=this.registerForm.value.acno;
      let pswd=this.registerForm.value.pswd;

      this.dataService.register(accno,uname,pswd)
    .subscribe((result:any)=>{
      if(result){
        alert(result.message)
        this.router.navigateByUrl('')
      }
    },
    (result)=>{
      alert(result.error.message)
    })

    }
    else{
      alert("invalid form")
    }
    
  }


}