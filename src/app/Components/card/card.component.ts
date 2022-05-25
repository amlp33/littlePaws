import { Component, OnInit, Input } from '@angular/core';
import { Constants as global } from 'src/app/global/constants';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  constructor() {
    console.log(this.petInfoChild);
  }

  ngOnInit(): void {}

  @Input()
  petInfoChild: any;

  currentSelectedAnimal(value: number) {
    console.log('selected', value);
    global.currentSelectedAnimalId = value;
  }
}
