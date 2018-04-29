import { Component, OnInit, OnDestroy, ViewChild, ElementRef, Renderer, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { timer } from 'rxjs/observable/timer';
import { select } from 'd3-selection';

import 'rxjs/add/observable/interval';

import { SpeechRecognitionService } from './../speech-recognition.service';
import { AppService } from '../app.service';

@Component({
  selector: 'app-random-charcters',
  templateUrl: './random-charcters.component.html',
  styleUrls: ['./random-charcters.component.css']
})
export class RandomCharctersComponent implements OnInit, OnDestroy {
  timer$;
  
  startBtnUrl = 'assets/images/msg/start.png';
  
  showSearchButton: boolean;
  speechData: string;

  isRandom = false;
  isPlay = false;
  isComplete = false;

  isLeg = false;

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


  constructor(
    private appService: AppService,
    private speechRecognitionService: SpeechRecognitionService
  ) {
    this.showSearchButton = true;
    this.speechData = '';
  }

  ngOnInit() { 
    // this.activateSpeech();
  }
  

  ngOnDestroy() {
    this.speechRecognitionService.DestroySpeechObject();
    console.log('ngOnDestroy!');
  }
  // 음성검색 활성화
  activateSpeech(): void {
    this.showSearchButton = false;

    this.speechRecognitionService.record()
        .subscribe(
        // listener
        (value) => {
          this.speechData = value;

          if (value === '시작하기' && !this.isRandom) {
            this.setRandomState();
          }

          if (this.isRandom) {
            if (value === '그만 그만' || value === '그만' && this.isPlay) {
              this.randomStop();
            }
            if (value === '다시다시' || value === '다시 다시' && !this.isPlay) {
              this.randomRestart();
            }
          }
          console.log(value);
        },
        // errror
        (err) => {
            console.log(err);
            if (err.error === 'no-speech') {
                console.log('--restatring service--');
                this.activateSpeech();
            }
        },
        // completion
        () => {
            this.showSearchButton = true;
            console.log('--complete--');
            this.activateSpeech();
        });
}
  // 최초 '시작하기' 클릭 시
  setRandomState() {
    this.isRandom = true;
    this.isPlay = true;
    this.randomStart();
  }
  // 랜덤 시작
  randomStart() {
    console.log('randomStart()');
    this.timer$ = timer(0, 140)
      .subscribe(val => {
        this.isLeg = true;
        this.getRandomIndex();
    });
  }

  // 랜덤 종료(선택하기 클릭 시)
  randomStop() {
    console.log('randomStop()');
    console.log('randomFaceIndex', this.randomIndex);
    this.isPlay = false;
    this.timer$.unsubscribe();
    this.isComplete = true;
    this.appService.setUserCharacter(this.randomIndex);
  }
  // 랜덤 다시시작
  randomRestart() {
    console.log('randomRestart()');
    this.randomStart();
    this.isPlay = true;
    this.isComplete = false;
  }

  // SVG Inline Type
  getRandomIndex() {
    this.randomIndex['face'] = Math.floor(Math.random() * 7);
    this.randomIndex['hair'] = Math.floor(Math.random() * 5);
    this.randomIndex['torso'] = Math.floor(Math.random() * 8);
    this.randomIndex['ear'] = Math.floor(Math.random() * 9);
    this.randomIndex['top'] = Math.floor(Math.random() * 9);
    this.randomIndex['eye'] = Math.floor(Math.random() * 10);
    this.randomIndex['mouth'] = Math.floor(Math.random() * 12);
    this.randomIndex['nose'] = Math.floor(Math.random() * 15);
    this.randomIndex['shoes'] = Math.floor(Math.random() * 11);
    this.randomIndex['bottom'] = Math.floor(Math.random() * 9);
    this.randomIndex['hairAcc'] = Math.floor(Math.random() * 4);
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


  

  onMouseEnter(btnName: string) {
    if (btnName === 'start') {
      this.startBtnUrl = 'assets/images/msg/start_hover.png';
    }
  }

  onMouseLeave(btnName: string) {
    if (btnName === 'start') {
      this.startBtnUrl = 'assets/images/msg/start.png';
    }
  }


}
