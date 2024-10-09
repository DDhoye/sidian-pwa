import { Component, OnInit } from '@angular/core';
import { Data } from '../interface/data.interface';
import { data } from '../data/data';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  infoData: Data[] = [];

  constructor() {}

  ngOnInit(): void {
    this.infoData = [...data];
    console.log(this.infoData);
  }
}
