import { Component, OnInit, OnDestroy, ViewChild, ElementRef, Renderer, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { timer } from 'rxjs/observable/timer';
import { select } from 'd3-selection';

import 'rxjs/add/observable/interval';
import { AppService } from '../app.service';
import {trigger, state, stagger, animate, style, group, query as q, transition, keyframes} from '@angular/animations';
import { Router } from '@angular/router';



// const customAnimation = '1s ease';
// const customAnimation = '1s cubic-bezier(1,.015,.295,1.225)';


const customAni = {
  on:   { aniName: '.6s cubic-bezier(1,.07,.83,.76)', scale: 'scale(1)',  opacity: 1 },
  off:  { aniName: '.6s ease-out', scale: 'scale(.6)', opacity: .2 }
};


export const chracterTransition = trigger('dynamicClass', [
  state('on', style({ transform: customAni.on.scale, opacity: customAni.on.opacity })),
  state('off', style({ transform: customAni.off.scale, opacity: customAni.off.opacity })),
  transition('on => off',
    animate(customAni.on.aniName, keyframes([
      style({ transform: customAni.on.scale, opacity: customAni.on.opacity, offset: 0, }),
      style({ transform: customAni.off.scale, opacity: customAni.off.opacity,  offset: 1 })
    ])),
  ),
  transition('off => on',
    animate(customAni.off.aniName, keyframes([
      style({ transform: customAni.off.scale, opacity: customAni.off.opacity, offset: 0, }),
      style({ transform: customAni.on.scale, opacity: customAni.on.opacity,  offset: 1 })
    ])),
  )
]);



@Component({
  selector: 'app-random-charcters',
  templateUrl: './random-charcters.component.html',
  styleUrls: ['./random-charcters.component.css'],
  animations: [chracterTransition]
})
export class RandomCharctersComponent {
  timer$; 
  isModal: boolean;
  modalName = 'main-to-character';

  

  dynamicClass = 'init';


  isRandom = false;
  isPlay = false;
  isComplete = false;

  isLeg = false;

  // Random Index Variables (SVG Inline Type)
  randomIndex = {
    hair: 0,
    torso: 0,
    ear: 0,
    top: 0,
    face: 0,
    eye: 0,
    mouth: 0,
    nose: 0,
    shoes: 0,
    bottom: 0,
    hairAcc: 0
  };


  constructor(
    private router: Router,
    private appService: AppService,
  ) { }
  // 시작하기 클릭시 모달창이 열려서 설명하고, 1초 후에 닫힌다.
  // 이미 랜덤이 돌아가고 있다.
  openModal(targetPage: string) {
    this.isModal = true;

    if (targetPage === 'random-characters') {
      this.modalName = 'main-to-character';
      setTimeout(() => {
        this.isModal = false;
        this.setRandomState();
      }, 3000);
    } else {
      this.modalName = 'character-to-name';
      setTimeout(() => {
        this.moveTo('random-name');
      }, 2000);
    }

  }
  closeModal() {
    this.isModal = false;
  }
  // 최초 '시작하기' 클릭 시
  setRandomState() {
    this.isRandom = true;
    this.isPlay = true;
    this.dynamicClass = 'off';
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
    this.dynamicClass = 'on';
    this.timer$.unsubscribe();
    this.timer$ = null;
    this.isComplete = true;
    this.appService.setUserCharacter(this.randomIndex);
  }

  // 랜덤 다시시작
  randomRestart() {
    console.log('randomRestart()');
    this.dynamicClass = 'off';
    this.isPlay = true;
    this.isComplete = false;
    setTimeout(() => { 
      this.randomStart();
    }, 600);
  }


  moveTo(targetPage: string) {
    const link = '/' + targetPage;
    this.router.navigate([link]);
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



}
