import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class StreamService {
  refreshClickStream: Observable<any>;
  requestOnRefreshStream: Observable<any>;
  
  constructor() { }


  setRequestOnRefreshStream(selector: any, event_kind: string) {
    //지정된 target Element 로부터 emit되는 Observable를 생성한다.
    // MouseEvent 객체를 리턴한다.
    this.refreshClickStream = Observable.fromEvent(selector, event_kind);

    // MouseEvent 객체의 속성을 이용한다기보다는, 클릭하면 ~ 한다로 액션의 시작점으로 사용한다.
    // 클릭시 github api에서 user 정보를 랜덤하게 가져온다.
    this.requestOnRefreshStream = this.refreshClickStream
      .map(ev => {
        const randomOffset: number = Math.floor(Math.random() * 2); // 0 or 1
        return "" + randomOffset;
    });
  }
}
