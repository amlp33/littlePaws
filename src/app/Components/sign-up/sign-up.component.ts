import { Component, OnInit } from '@angular/core';
import { Constants as global } from 'src/app/global/constants';
import { NgForm } from '@angular/forms';
import { Form } from '../../model/form';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  constructor() {
    // global.signUpLogin = false;
  }

  changeAccountVisibility() {
    global.isAccountSigned = false;
    console.log('am sign up', global.isAccountSigned);
  }

  phoneNumberPattern = '/^d{10}$/';
  formValue: string = '';
  submitData(value: any) {
    if (value.phoneNumber.value.match(this.phoneNumberPattern)) {
      console.log('true');
    }
    console.log('ngForm', value);
    global.userDataStore.push(value);
    console.log('user data store', global.userDataStore);
  }

  userdata = new Form(
    'Arvind Choudhary',
    'arvindchoudhary@gmail.com',
    9998887775,
    'baburaoapte33',
    'baburaoapte33'
  );

  ngOnInit(): void {}
}
