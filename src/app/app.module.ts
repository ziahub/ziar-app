import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { WeightCalculatorComponent } from './calculator/weight/weight-calc.component';

import { WeightCalculator } from './calculator/weight/weight-calc';

@NgModule({
  declarations: [
    AppComponent,
    WeightCalculatorComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    WeightCalculator
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
