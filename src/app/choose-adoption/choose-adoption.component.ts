import { Component, OnInit } from '@angular/core';
import { Constants as global } from '../global/constants';
@Component({
  selector: 'app-choose-adoption',
  templateUrl: './choose-adoption.component.html',
  styleUrls: ['./choose-adoption.component.scss'],
})
export class ChooseAdoptionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  currentAnimal = global.animalchoosed;
  chooseAdoptionVisibility = 'false';

  currentAnimalFunc(value: string) {
    global.animalchoosed = value;
    console.log(global.animalchoosed);
  }
}
