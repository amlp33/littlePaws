import { Component, OnInit } from '@angular/core';
import { Constants as global } from 'src/app/global/constants';
import { Router, NavigationEnd } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import '../../../styles.scss';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  constructor(private dialogRef: MatDialog, private router: Router) {
    this.menuVisible = false;
    this.myAccountMobile = true;
  }

  myAccountVisibility: boolean = global.isAccountSigned;
  menuVisible: boolean;
  myAccountMobile: boolean;
  ngOnInit(): void {}

  toggleVisibility() {
    this.menuVisible = !this.menuVisible;
    console.log(this.menuVisible);
  }

  changeVisible = () => {
    this.menuVisible = true;
  };

  signUpVisibility: boolean = false;
  loggedInFunc(value: boolean) {
    // this.isLoggedIn = true;
    this.signUpVisibility = true;
    this.myAccountMobile = false;
    console.log(value);
    // if (value == true) {
    //   this.loggedInString = 'My Account';
    // }
  }
}
