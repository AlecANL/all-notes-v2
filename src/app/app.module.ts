import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { ToastService, AngularToastifyModule } from 'angular-toastify';

import { AppComponent } from './app.component';

import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularToastifyModule,
  ],
  providers: [ToastService],
  bootstrap: [AppComponent],
})
export class AppModule {}
