
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  currentUser='';

  options = {
    withCredentials:true,
  }
  accountDetails: any = {
    1000:{acno:1000,actype:"savings",username:"userone",password:"userone",balance:50000},
    1001:{acno:1001,actype:"savings",username:"usertwo",password:"usertwo",balance:5000},
    1002:{acno:1002,actype:"current",username:"userthree",password:"userthree",balance:10000},
    1003:{acno:1003,actype:"current",username:"userfour",password:"userfour",balance:6000}
}

  constructor(private http: HttpClient) {
    this.getDetails();
  }

  saveDetails(){
    localStorage.setItem("accountDetails", JSON.stringify(this.accountDetails));
    if(this.currentUser){
      localStorage.setItem("currentUser", JSON.stringify(this.currentUser));
    }
  }

  getDetails(){
    if(localStorage.getItem("accountDetails")){
      this.accountDetails = JSON.parse(localStorage.getItem("accountDetails") || '')
    }
    if(localStorage.getItem("currentUser")){
      this.currentUser = JSON.parse(localStorage.getItem("currentUser") || '')
    }
  }

  register(acno: any,username: any, password: any) {
    
    const data={
      acno,
      username,
      password
    }
    return this.http.post('http://localhost:3000/register',data)
  }

  login(acno: any, password: any) {
    const data={
      acno,
      password
    }
    return this.http.post('http://localhost:3000/login',data, this.options)
  }
  

  deposit(acno: any, password: any, amount: any) {
    const data={
      acno,
      password,
      amount
    }
    return this.http.post('http://localhost:3000/deposit',data, this.options)
  }

  withdraw(acno: any, password: any, amount: any) {
    const data={
      acno,
      password,
      amount
    }
    return this.http.post('http://localhost:3000/withdraw',data, this.options)
  }
}
