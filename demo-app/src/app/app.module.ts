import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdditemComponent } from './additem/additem.component';
import { HttpClientModule } from '@angular/common/http';
import { ScrollComponent } from './scroll/scroll.component';
@NgModule({
  declarations: [
    AppComponent,
    AdditemComponent,
    ScrollComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
