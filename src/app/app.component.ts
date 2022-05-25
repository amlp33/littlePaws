import { Component } from '@angular/core';
import { Constants } from './global/constants';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isNav = Constants.signUpLogin;
  name = '';

  title = 'littlePaws';

  currentRoute = '';
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event.constructor.name === 'NavigationEnd') {
        this.name = (<any>event).url.split('/').slice(-1)[0];
        console.log(this.name);
        if (
          this.name === 'sign-up' ||
          this.name === 'login' ||
          this.name === 'find-home'
        ) {
          this.isNav = false;
        } else {
          this.isNav = true;
        }
        // this.isNav = this.currentRoute === 'sign-up';

        console.log(this.isNav);
      }
    });
    console.log(this.isNav);
  }
}
