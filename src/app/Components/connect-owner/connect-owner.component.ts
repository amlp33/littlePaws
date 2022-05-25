import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-connect-owner',
  templateUrl: './connect-owner.component.html',
  styleUrls: ['./connect-owner.component.scss'],
})
export class ConnectOwnerComponent implements OnInit {
  @Input()
  currentPetInfo: any[] = [];

  constructor() {}

  ngOnInit(): void {}
}
