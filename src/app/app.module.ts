import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// typescript feature. Typescript moet weten waar zaken zijn.
// import { FormsModule} from '@angular/forms'; 

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
    // FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
