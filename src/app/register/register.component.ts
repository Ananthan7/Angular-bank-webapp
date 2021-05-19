import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  uname="";
  acno="";
  pswd="";

  constructor(private dataService:DataService, private router:Router) { }

  ngOnInit(): void {
  }
  

  register(){
    let uname=this.uname;
    let accno=this.acno;
    let pswd=this.pswd;
    const user=this.dataService.register(uname,accno,pswd)   
    if(user){
      alert("Successfully registerd")
      this.router.navigateByUrl('')
    }else{
      alert("User already exists")
    }
  }


}
