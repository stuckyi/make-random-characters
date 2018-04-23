import { Observable } from 'rxjs/Observable';
import { Injectable, NgZone } from '@angular/core';
import * as _ from 'lodash';

interface IWindow extends Window {
    webkitSpeechRecognition: any;
    SpeechRecognition: any;
}

@Injectable()
export class SpeechRecognitionService {
    speechRecognition: any;

    constructor(private zone: NgZone) {
    }

    record(): Observable<string> {

        return Observable.create(observer => {
            const { webkitSpeechRecognition }: IWindow = <IWindow>window;
            this.speechRecognition = new webkitSpeechRecognition();
            // this.speechRecognition = SpeechRecognition;
            this.speechRecognition.continuous = true;
            // this.speechRecognition.interimResults = true;
            // this.speechRecognition.lang = 'en-us';
            this.speechRecognition.lang = 'ko-kr';
            this.speechRecognition.maxAlternatives = 1;

            this.speechRecognition.onresult = speech => {
                let term = '';
                if (speech.results) {
                    const result = speech.results[speech.resultIndex];
                    const transcript = result[0].transcript;
                    if (result.isFinal) {
                        if (result[0].confidence < 0.3) {
                            console.log('결과를 인식하지 못했어요. 다시 시도해주세요.');
                        } else {
                            term = _.trim(transcript);
                            console.log('혹시 이렇게 말하셨나요? -> ' + term + ' ,이게 아니라면 다시 말해보세요');
                        }
                    }
                }
                this.zone.run(() => {
                    observer.next(term);
                });
            };

            this.speechRecognition.onerror = error => {
                observer.error(error);
            };

            this.speechRecognition.onend = () => {
                observer.complete();
            };

            this.speechRecognition.start();
            console.log('Say something - We are listening !!!');
        });
    }

    DestroySpeechObject() {
      if (this.speechRecognition) {
        this.speechRecognition.stop();
      }
    }

}