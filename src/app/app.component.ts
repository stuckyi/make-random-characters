import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import 'rxjs/add/observable/interval';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  randomLogoUrl: string;

  constructor(private router: Router) { 
    router.events.subscribe((val) => {
      this.randomLogoUrl = Math.floor(Math.random() * 6) + '.png';
    });

  }
  
  ngOnInit() {
  }


}
