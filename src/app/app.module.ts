import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DatepickerModule } from 'angular2-material-datepicker';

import { AppComponent } from './app.component';
import { CurrencyComponent }  from './currency/currency.component';
import { HomeComponent }  from './home/home.component';
import { AboutComponent } from './about/about.component';
import { routing } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    DatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
