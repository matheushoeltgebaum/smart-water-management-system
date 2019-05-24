import { AuthGuard } from './../common/auth.guard';
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { ChartComponent } from './shared/chart/chart.component';
import { NavComponent } from './nav/nav.component';
import { ChartsModule } from 'angular-bootstrap-md';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MonthpickerComponent } from './shared/monthpicker/monthpicker.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { YearlyConsumptionComponent } from './yearly-consumption/yearly-consumption.component';
import { MonthlyConsumptionComponent } from './monthly-consumption/monthly-consumption.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JwtModule } from '@auth0/angular-jwt';

@NgModule({
  declarations:
  [
    AppComponent,
    LoginComponent,
    ChartComponent,
    NavComponent,
    MonthpickerComponent,
    YearlyConsumptionComponent,
    MonthlyConsumptionComponent
  ],
  imports:
  [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ChartsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    NgbModule,
    JwtModule
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
