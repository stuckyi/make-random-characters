

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { RandomCharctersComponent } from './random-charcters/random-charcters.component';
import { SpeechRecognitionComponent } from './speech-recognition/speech-recognition.component';



const routes: Routes = [
    { path: '', redirectTo: '/main', pathMatch: 'full' },
    { path: 'main', component: MainComponent },
    { path: 'random-characters', component: RandomCharctersComponent },
    { path: 'speech-recognition', component: SpeechRecognitionComponent }
];

@NgModule({
    imports: [ CommonModule, RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}