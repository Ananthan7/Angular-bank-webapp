import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterComponent } from '../register/register.component';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  uname = '';
  acno = '';
  pswd = '';

  constructor(private router: Router) {}

  accountDetails: any = {
    1000: {
      acno: 1000,
      username: 'userone',
      password: 'userone',
      balance: 50000,
    },
    1001: {
      acno: 1001,
      username: 'usertwo',
      password: 'usertwo',
      balance: 5000,
    },
    1002: {
      acno: 1002,
      username: 'userthree',
      password: 'userthree',
      balance: 10000,
    },
    1003: {
      acno: 1003,
      username: 'userfour',
      password: 'userfour',
      balance: 6000,
    },
  };

  login(acno: any, pswd: any) {
    let users = this.accountDetails;
    if (acno in users) {
      if (pswd == users[acno]['password']) {
        return true;
      } else {
        return false;
      }
    } else {
      alert('invalid account number');
      return false;
    }
  }

  register(uname: any, accno: any, pswd: any) {
    let user = this.accountDetails;

    if (accno in user) {
      return false;
    } else {
      user[accno] = {
        acno: accno,
        username: uname,
        password: pswd,
        balance: 0,
      };
      return true;
    }
  }
  deposit(acno: any, pswd: any, amt: any) {
    let amount=parseInt(amt)
    let users = this.accountDetails;
    if (acno in users) {
      if (pswd == users[acno]['password']) {
        users[acno]['balance'] += amount;
        return users[acno]['balance'];
      } else {
        alert('invalid credentials');
        return false;
      }
    } else {
      alert('invalid');
      return false;
    }
  }

  withdraw(acno: any, pswd: any, amt: any) {
    let amount=parseInt(amt)
    let users = this.accountDetails;
    if (acno in users) {
      if (pswd == users[acno]['password']) {
        users[acno]['balance'] -= amount;
        return users[acno]['balance'];
      } else {
        alert('invalid credentials');
        return false;
      }
    } else {
      alert('invalid');
      return false;
    }
  }


}
