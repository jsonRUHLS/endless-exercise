import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';

@NgModule({
  declarations: [AppComponent, HowItWorksComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
// eslint-disable-next-line prettier/prettier
export class AppModule { }
