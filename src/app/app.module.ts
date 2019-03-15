import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ScanComponent } from './scan/scan.component';
import { AppRoutingModule } from './app.routing';

import { ScanService } from './scan/scan.service';


@NgModule({
  declarations: [
    AppComponent,
    ScanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ScanService],
  bootstrap: [AppComponent]
})
export class AppModule { }
