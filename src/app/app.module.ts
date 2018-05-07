import { environment } from './../environments/environment.prod';

import { AppRoutingModule } from './app-routing.mdoule';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { RouletteComponent } from './roulette/roulette.component';
import { ArchiveComponent } from './archive/archive.component';

// import { MatIconModule } from '@angular/material/icon';
// import { MatTooltipModule } from '@angular/material/tooltip';


// const MATERIAL_MODULES = [
//   MatTooltipModule
// ];


@NgModule({
  declarations: [
    AppComponent,
    RandomCharctersComponent,
    MainComponent,
    SpeechRecognitionComponent,
    RandomNameComponent,
    RouletteComponent,
    ArchiveComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    // MATERIAL_MODULES
    // AngularFireModul.initializeApp(environment.firebase)
  ],
  providers: [SpeechService, SpeechRecognitionService, AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
