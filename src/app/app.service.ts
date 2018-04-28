import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class AppService {
  selectedCharacter: any;

  private subject = new Subject<any>();


  constructor() { }

  setUserCharacter(selectedCharacter: any) {
    this.selectedCharacter = selectedCharacter;
  }
  getCurrentCharacter() {
    return this.selectedCharacter;
  }


  // using subject
  sendData(value: any) {
    this.subject.next(value);
  }
  clearData() {
    this.subject.next();
  }
  getData(): Observable<any> {
    return this.subject.asObservable();
  }

}
