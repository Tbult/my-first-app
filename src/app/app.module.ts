import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// typescript feature. Typescript moet weten waar zaken zijn.
// import { FormsModule} from '@angular/forms'; 

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component'; // voeg hier de import van je component toe (typescript)

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent // voeg hier je component toe
  ],
  imports: [
<<<<<<< HEAD
    BrowserModule
    // FormsModule
=======
    BrowserModule // laden van ingebouwde Angular modules 
>>>>>>> 278b1f3dd227c7e5502a94e1881b9c5694600fbc
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
