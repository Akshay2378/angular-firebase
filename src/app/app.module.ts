import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { ServerComponent } from '../app/server/server.component';
import { GreenComponent } from '../app/green/green.component';
import { RedComponent } from '../app/red/red.component';
import { YellowComponent } from './yellow/yellow.component';
import { PNameComponent } from '../app/p-name/p-name.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    GreenComponent,
    RedComponent,
    PNameComponent,
    YellowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
