import { AlphaVantageService } from './alpha_vantage/alphavantage.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { HttpModule } from '@angular/http';
import {} from 'angular2/http';
 import { ChartComponent } from './chart/chart.component';
 import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartsModule } from 'ng2-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ModalModule } from 'ngx-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    ModalModule.forRoot()
  ],
  providers: [AlphaVantageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
