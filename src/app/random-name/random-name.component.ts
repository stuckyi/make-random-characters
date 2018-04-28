import { AppService } from './../app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-name',
  templateUrl: './random-name.component.html',
  styleUrls: ['./random-name.component.css']
})
export class RandomNameComponent implements OnInit {
  result: any;

  constructor(private appService: AppService) { 
    this.result = this.appService.getCurrentCharacter();
  }

  ngOnInit() {
    console.log(this.result);
    // console.log(this.result.hair);
  }

}
