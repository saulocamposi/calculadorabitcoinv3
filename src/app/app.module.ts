import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BrexchangeComponent } from './brexchange/brexchange.component';
import { NavComponent } from './nav/nav.component';
import { PolionexComponent } from './polionex/polionex.component';
import { BitvalorComponent } from './bitvalor/bitvalor.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { FooterComponent } from './footer/footer.component';
import { BtcvarejoComponent } from './btcvarejo/btcvarejo.component';
import { BlinktradeComponent } from './blinktrade/blinktrade.component';
import { TradesfoxbitComponent } from './tradesfoxbit/tradesfoxbit.component';
import { WalletfoxbitComponent } from './walletfoxbit/walletfoxbit.component';
import { OrdersfoxbitComponent } from './ordersfoxbit/ordersfoxbit.component';

@NgModule({
  declarations: [
    AppComponent,
    BrexchangeComponent,
    NavComponent,
    PolionexComponent,
    BitvalorComponent,
    CalculatorComponent,
    FooterComponent,
    BtcvarejoComponent,
    BlinktradeComponent,
    TradesfoxbitComponent,
    WalletfoxbitComponent,
    OrdersfoxbitComponent,
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
