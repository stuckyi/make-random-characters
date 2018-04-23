import { AppRoutingModule } from './app-routing.mdoule';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RandomCharctersComponent } from './random-charcters/random-charcters.component';
import { MainComponent } from './main/main.component';
import { SpeechService } from './speech.service';
import { SpeechRecognitionService } from './speech-recognition.service';
import { SpeechRecognitionComponent } from './speech-recognition/speech-recognition.component';



@NgModule({
  declarations: [
    AppComponent,
    RandomCharctersComponent,
    MainComponent,
    SpeechRecognitionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [SpeechService, SpeechRecognitionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
