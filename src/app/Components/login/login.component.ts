import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Constants as global } from 'src/app/global/constants';
import { Form } from '../../model/form';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor() {}
  isUserExists: boolean = false;
  message: string = '';
  loginDataStore: any = global.userDataStore;
  submitData(value: any) {
    console.log(this.loginDataStore);
    console.log(value.email);
    for (let i = 0; i <= this.loginDataStore.length - 1; i++) {
      console.log(this.loginDataStore[0]);
      console.log(value.email, value.password);
      if (
        value.email === this.loginDataStore[i].email &&
        value.password === this.loginDataStore[i].password
      ) {
        this.isUserExists = true;
        this.message = 'Verified';
        return;
      } else {
        console.log(
          this.loginDataStore[i].email,
          this.loginDataStore[i].password
        );
        this.message = 'user does not exists';
      }
    }
    console.log(this.message);
  }

  ngOnInit(): void {}
}
