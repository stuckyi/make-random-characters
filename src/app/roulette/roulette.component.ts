import { AppService } from './../app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roulette',
  templateUrl: './roulette.component.html',
  styleUrls: ['./roulette.component.css']
})
export class RouletteComponent implements OnInit {
  randomIndex = {
    face: 0,
    hair: 0,
    torso: 0,
    ear: 0,
    top: 0,
    eye: 0,
    mouth: 0,
    nose: 0,
    shoes: 0,
    bottom: 0,
    hairAcc: 0
  };

  isHair0 = false;


  constructor(private appService: AppService) { }

  ngOnInit() {
  }

}
