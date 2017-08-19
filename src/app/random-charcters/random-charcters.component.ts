import { Component, OnInit, ViewChild, ElementRef, Renderer, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/interval';
import { select } from 'd3-selection';

@Component({
  selector: 'app-random-charcters',
  templateUrl: './random-charcters.component.html',
  styleUrls: ['./random-charcters.component.css']
})
export class RandomCharctersComponent implements OnInit {

  isRandom: boolean = false;
  isPlay: boolean = false;
  isComplete: boolean = false;


  // Random Object Variables (SVG File Import Type)
  randomFaceUrl: string;
  randomHairUrl: string;
  randomEarUrl: string;
  randomEyeUrl: string;
  randomMouthUrl: string;
  randomNoseUrl: string;
  randomTorsoUrl: string;
  randomLegUrl: string;
  randomTopUrl: string;
  randomBottomUrl: string;
  randomShoesUrl: string;
  randomHairAccUrl: string;
  

  

  // Random Index Variables (SVG Inline Type)
  randomStream$;
  randomFaceIndex: number;
  randomHairIndex: number;
  randomTorsoIndex: number;
  randomEarIndex: number;
  randomTopIndex: number;
  randomEyeIndex: number;
  randomMouthIndex: number;
  randomNoseIndex: number;
  randomShoesIndex: number;
  randomBottomIndex: number;
  randomHairAccIndex: number;

  
  timer; // Random Stream Subscription Object.
  colorClassName: string = 'test4'; // Conditional Class Variables (for test)


  constructor() {
    // this.timer = this.randomStream$.subscribe();
  }

  ngOnInit() { }

  setRandomState() {
    this.isRandom = true;
    this.isPlay = true;
    this.setRandomStream();    // this.testDelay();

  }

  randomStop() {
    this.isPlay = false;
    this.timer.unsubscribe();
    this.isComplete = true;
  }


  setRandomStream() {
    const startDelay = 100;
    const eachRandomDelay = 2000;

    this.randomStream$ = Observable.interval(startDelay)
      .delay(new Date(Date.now() + eachRandomDelay))
      .map(() => {
        // 현재 돌아가는 Random Stream에서 선택 된 Element. (선택되었다는 것은 1개를 의미.)
        const faceEls = document.getElementsByClassName('face');
        console.log(faceEls);

        this.getRandomIndex();
      }); 
    
    this.timer = this.randomStream$.subscribe();
  }


  // SVG Inline Type
  getRandomIndex() {
    this.randomFaceIndex = Math.floor(Math.random() * 7);
    this.randomHairIndex = Math.floor(Math.random() * 4);
    this.randomTorsoIndex = Math.floor(Math.random() * 8);
    this.randomEarIndex = Math.floor(Math.random() * 9);
    this.randomTopIndex = Math.floor(Math.random() * 9);
    this.randomEyeIndex = Math.floor(Math.random() * 10);
    this.randomNoseIndex = Math.floor(Math.random() * 15);
    this.randomNoseIndex = Math.floor(Math.random() * 11);
    this.randomShoesIndex = Math.floor(Math.random() * 11);
    this.randomBottomIndex = Math.floor(Math.random() * 9);
    this.randomHairAccIndex = Math.floor(Math.random() * 3);
  }  





  // SVG File Import Type.
  getRandomUrl() {
    this.randomFaceUrl = Math.floor(Math.random() * 7) + '.svg';
    this.randomHairUrl = Math.floor(Math.random() * 4) + '.svg';
    
    this.randomEarUrl = Math.floor(Math.random() * 9) + '.svg';
    this.randomEyeUrl = Math.floor(Math.random() * 10) + '.svg';
    this.randomMouthUrl = Math.floor(Math.random() * 12) + '.svg';
    this.randomNoseUrl = Math.floor(Math.random() * 15) + '.svg';

    this.randomTorsoUrl = Math.floor(Math.random() * 8) + '.svg';
    this.randomLegUrl = '0.svg'; // leg is only one type.

    this.randomTopUrl = Math.floor(Math.random() * 9) + '.svg';
    this.randomBottomUrl = Math.floor(Math.random() * 9) + '.svg';

    this.randomShoesUrl = Math.floor(Math.random() * 11) + '.svg';
    this.randomHairAccUrl = Math.floor(Math.random() * 3) + '.svg';
  }  


}
