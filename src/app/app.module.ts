import { AppRoutingModule } from './app-routing.mdoule';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RandomCharctersComponent } from './random-charcters/random-charcters.component';
import { MainComponent } from './main/main.component';



@NgModule({
  declarations: [
    AppComponent,
    RandomCharctersComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
