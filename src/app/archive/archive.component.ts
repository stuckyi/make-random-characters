import { AppService } from './../app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {
  characters;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.getCharacters()
      .subscribe(characters => this.characters = characters);
  }

}
