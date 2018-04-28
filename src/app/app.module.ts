import { environment } from './../environments/environment.prod';

import { AppRoutingModule } from './app-routing.mdoule';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RandomCharctersComponent } from './random-charcters/random-charcters.component';
import { MainComponent } from './main/main.component';


// Speech Feature
import { SpeechService } from './speech.service';
import { SpeechRecognitionService } from './speech-recognition.service';
import { SpeechRecognitionComponent } from './speech-recognition/speech-recognition.component';


// af2

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AppService } from './app.service';
import { RandomNameComponent } from './random-name/random-name.component';




@NgModule({
  declarations: [
    AppComponent,
    RandomCharctersComponent,
    MainComponent,
    SpeechRecognitionComponent,
    RandomNameComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    // AngularFireModul.initializeApp(environment.firebase)
  ],
  providers: [SpeechService, SpeechRecognitionService, AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
