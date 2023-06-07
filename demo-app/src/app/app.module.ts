import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdditemComponent } from './additem/additem.component';
import { HttpClientModule } from '@angular/common/http';
import { HighlightDirective } from './highlight.directive';
import { AllusersComponent } from './allusers/allusers.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UserdataComponent } from './userdata/userdata.component';
import { ContactComponent } from './contact/contact.component';
import { NotificationBordComponent } from './notification-bord/notification-bord.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';

@NgModule({
  declarations: [
    AppComponent,
    AdditemComponent,
    HighlightDirective,
    AllusersComponent,
    UserdetailsComponent,
    UserdataComponent,
    ContactComponent,
    NotificationBordComponent,
    Comp1Component,
    Comp2Component,
 
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
