import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// typescript feature. Typescript moet weten waar zaken zijn.
// import { FormsModule} from '@angular/forms'; 

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { TestcomponentComponent } from './testcomponent/testcomponent.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccesAlertComponent } from './succes-alert/succes-alert.component'; // voeg hier de import van je component toe (typescript)


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    TestcomponentComponent,
    WarningAlertComponent,
    SuccesAlertComponent // voeg hier je component toe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
