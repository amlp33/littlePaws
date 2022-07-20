import { Component, OnInit, Input } from '@angular/core';

import { Constants as global } from 'src/app/global/constants';
@Component({
  selector: 'app-connect-owner',
  templateUrl: './connect-owner.component.html',
  styleUrls: ['./connect-owner.component.scss'],
})
export class ConnectOwnerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.currentOwnerId();
  }

  currentOwner: any;
  currentOwnerId() {
    global.currentSelectedAnimalId;

    for (let i = 0; i <= global.petInfoGlobal.length - 1; i++) {
      if (global.petInfoGlobal[i].id === global.currentSelectedAnimalId) {
        this.currentOwner = global.petInfoGlobal[i];
      }
    }
  }
}
