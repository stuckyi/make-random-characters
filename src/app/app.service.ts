import { Character, Module } from './model/character';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';


@Injectable()
export class AppService {

  selectedCharacter: Module;
  selectedName: string;

  // afs
  characters: AngularFirestoreCollection<Character>;


  constructor(private afs: AngularFirestore) {
    this.afs.firestore.settings({ timestampsInSnapshots: true });

    this.characters = this.afs.collection<Character>('characters',
      ref => ref.orderBy('createdAt', 'desc'));
  }




  // afs database
  getCharacters() {
    return this.characters.valueChanges();
  }

  addCharacter(newCharacter: Character) {
    return this.characters.add(newCharacter);
  }


  /*


  getSnapshot() {
    return this.characters.snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          return { id: a.payload.doc.id, ...a.payload.doc.data() };
        });
      });
  }



  updateCup(id, data) {
    data.updatedAt = new Date();
    return this.getCupById(id).update(data);
  }
  deleteCup(id) {
    return this.getCupById(id).delete();
  }

  getCharacterById(id: any) {
    return this.afs.doc<any>('characters/' + id);
  }
  */


  // App method
  setUserCharacter(selectedCharacter: Module) {
    this.selectedCharacter = selectedCharacter;
  }
  setUserName(selectedName: string) {
    console.log(selectedName);
    this.selectedName = selectedName;
  }

  getCurrentCharacter() {
    return this.selectedCharacter;
  }

}
