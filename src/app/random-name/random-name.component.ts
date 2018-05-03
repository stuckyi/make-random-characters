import { Module, Character } from './../model/character';
import { timer } from 'rxjs/observable/timer';
import { NAMES } from './name';
import { AppService } from './../app.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-random-name',
  templateUrl: './random-name.component.html',
  styleUrls: ['./random-name.component.css']
})
export class RandomNameComponent implements OnInit, OnDestroy {
  dataset = NAMES; // 2350

  timer$: any;


  currentModule: Module;
  currentName: string;


  isFirst: boolean;
  isMiddle: boolean;
  isLast: boolean;

  isPlay: boolean;
  isSave: boolean;

  step;
  randomNameIndex = { first: 0, middle: 0, last: 0 };


  constructor(private appService: AppService) {
    this.currentModule = this.appService.getCurrentCharacter();
  }

  ngOnInit() {
    this.step = 0;
    this.play(this.step);
  }

  ngOnDestroy(): void {
    if (this.timer$) {
      this.timer$.unsubscribe();
      this.timer$ = null;
    }
  }


  // 랜덤 시작
  play(stepLev: number) {
    const _delay = 100;
    const _interval = 140;

    let currentName;

    if (stepLev === 0) {
      currentName = 'first';
      this.isFirst = true;
    } else if (stepLev === 1) {
      currentName = 'middle';
      this.isMiddle = true;
    } else if (stepLev === 2) {
      currentName = 'last';
      this.isLast = true;
    } else { console.log('current name error'); }

    this.timer$ = timer(_delay, _interval)
      .subscribe(val => {
        this.randomNameIndex[currentName] = Math.floor(Math.random() * this.dataset.length);
    });
  }

   // 랜덤 종료(선택하기 클릭 시)
  stop() {
    console.log('stop()');
    this.timer$.unsubscribe();
    this.timer$ = null;

    switch (this.step) {
      case 0:
        this.step++;
        this.play(this.step);
        break;
      case 1:
        this.step++;
        this.play(this.step);
        break;
      case 2:
        this.setSelectedName();
        break;
      default:
        console.error('current stepLev is ', this.step);
        break;
    }
  }

  // 클릭시 생성한 캐릭터, 이름을 서버에 저장한다.
  saveCharacter() {
    const result = { name: this.currentName, modules: this.currentModule };
    this.appService.addCharacter(result);
    // this.appService.addCharacter(this.sele);
  }
  restart() {
    console.log('restart()! 아직 기능없음');
  }



  setSelectedName() {
    this.step = 0;
    this.isSave = true;

    this.currentName =
      this.dataset.charAt(this.randomNameIndex.first) +
      this.dataset.charAt(this.randomNameIndex.middle) +
      this.dataset.charAt(this.randomNameIndex.last);

  }


}
