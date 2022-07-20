import { Component, OnInit, Input } from '@angular/core';
import { Constants as global } from 'src/app/global/constants';
@Component({
  selector: 'app-adopt-me',
  templateUrl: './adopt-me.component.html',
  styleUrls: ['./adopt-me.component.scss'],
})
export class AdoptMeComponent implements OnInit {
  // @Input()
  // currentId!: number;
  currId: number = global.currentSelectedAnimalId;
  constructor() {
    // console.log(this.currentId);
    this.currentCardFunc();
  }

  currentIdFunc(currentId: number) {
    console.log('current', currentId);
    global.currentSelectedAnimalId = currentId;
  }
  currentCard: any;
  currentCardFunc() {
    for (let i = 0; i <= global.petInfoGlobal.length - 1; i++) {
      if (this.currId === global.petInfoGlobal[i].id) {
        this.currentCard = global.petInfoGlobal[i];
      }
    }
  }

  ngOnInit(): void {}
}
