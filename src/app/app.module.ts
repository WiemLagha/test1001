import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { IpEmailBuilderModule } from 'ip-email-builder';
import {
  IpEmailBuilderService,
  Structure,
  TextBlock,
  IPEmail,
} from 'ip-email-builder';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    IpEmailBuilderModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule    
  ],
  providers: [
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
