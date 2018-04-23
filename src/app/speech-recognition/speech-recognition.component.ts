import { Component, OnInit, OnDestroy } from '@angular/core';
import { SpeechRecognitionService } from '../speech-recognition.service';

@Component({
  selector: 'app-speech-recognition',
  templateUrl: './speech-recognition.component.html',
  styleUrls: ['./speech-recognition.component.css']
})
export class SpeechRecognitionComponent implements OnInit, OnDestroy {
  showSearchButton: boolean;
  speechData: string;
  constructor(private speechRecognitionService: SpeechRecognitionService) { 
    this.showSearchButton = true;
    this.speechData = '';
  }

  ngOnInit() {
    console.log('hello speech!');
  }

  ngOnDestroy() {
    this.speechRecognitionService.DestroySpeechObject();
    console.log('ngOnDestroy!');
  }

  activateSpeechSearchMovie(): void {
      this.showSearchButton = false;

      this.speechRecognitionService.record()
          .subscribe(
          // listener
          (value) => {
              this.speechData = value;
              console.log(value);
          },
          // errror
          (err) => {
              console.log(err);
              if (err.error === 'no-speech') {
                  console.log('--restatring service--');
                  this.activateSpeechSearchMovie();
              }
          },
          // completion
          () => {
              this.showSearchButton = true;
              console.log('--complete--');
              this.activateSpeechSearchMovie();
          });
  }


}
