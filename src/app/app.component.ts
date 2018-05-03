import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/interval';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  readonly ROOT_URL = 'https://artlink-randomplay.firebaseapp.com/random-characters';
  randomLogoUrl: string; // 라우팅 될 때마다 로고를 변경하기 위함

  info: any;
  

  constructor(
    private appService: AppService,
    private http: HttpClientModule,
    private router: Router) {

    // for logo change
    router.events.subscribe((val) => {
      this.randomLogoUrl = Math.floor(Math.random() * 6) + '.png';
    });
  }
  ngOnInit() { }
}
