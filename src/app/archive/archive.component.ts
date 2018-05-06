import { Router } from '@angular/router';
import { Character } from './../model/character';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AppService } from './../app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {
  characters: any;
  recentCharacter: any;

  isProcessComplete: boolean;

  // Slider
  sliderX = 0;
  svgWidth = 280;
  viewCount = 6; // 한 화면에 표시되는 개수
  totalCount;
  xMax;
  xMin;

  isLeft = false;
  isRight = true;

  constructor(
    private router: Router,
    private afs: AngularFirestore,
    private appService: AppService
  ) { }

  ngOnInit() {
    this.appService.getCharacters()
      .subscribe(characters => {
        this.characters = characters;
        this.sliderInit();
      });
  }


  openInfo() {
    console.log('openInfo');
  }

  sliderInit() {
    if (this.characters) {
      this.totalCount = this.characters.length;
      this.xMax = (this.totalCount - this.viewCount) * this.svgWidth *-1;
      this.xMin = 0;

      console.log(this.totalCount);
    }
    
  }
  moveBtn(dir: string) {
    // console.log('dir', dir);
    // console.log('sliderX before', this.sliderX);

    if (this.sliderX <= this.xMax) {
      console.log('xMax!');
      this.isRight = false;
    } else {
      this.isRight = true;
    }

    if (this.sliderX >= this.xMin) {
      console.log('xMin!');
      this.isLeft = false;
    } else {
      this.isLeft = true;
    }


    if (this.isRight && dir === 'right') {
      this.sliderX -= this.svgWidth;
    } else if (this.isLeft && dir === 'left') {
      this.sliderX += this.svgWidth;
    } else {
      console.log('버튼클릭했지만, 이동 불가.');
    }
  }
  getPosX(){
    return 'translateX(' + this.sliderX + 'px)';
  }

  moveTo(targetPage: string) {
    const link = '/' + targetPage;
    this.router.navigate([link]);
  }



}
