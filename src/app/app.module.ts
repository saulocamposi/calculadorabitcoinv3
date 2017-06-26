import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FoxbitComponent } from './foxbit/foxbit.component';
import { BrexchangeComponent } from './brexchange/brexchange.component';
import { BrexchangeDirective } from './brexchange.directive';
import { NavComponent } from './nav/nav.component';
import { PolionexComponent } from './polionex/polionex.component';
import { BitvalorComponent } from './bitvalor/bitvalor.component';

@NgModule({
  declarations: [
    AppComponent,
    BrexchangeComponent,
    NavComponent,
    PolionexComponent,
    BitvalorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
