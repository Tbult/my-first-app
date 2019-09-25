import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component'; // voeg hier de import van je component toe (typescript)

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent // voeg hier je component toe
  ],
  imports: [
    BrowserModule // laden van ingebouwde Angular modules 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
