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

  constructor(
    private afs: AngularFirestore,
    private appService: AppService
  ) { }

  ngOnInit() {
    this.appService.getCharacters()
      .subscribe(characters => {
        this.characters = characters;
      });
  }

}
