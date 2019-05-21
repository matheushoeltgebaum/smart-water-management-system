import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartComponent } from './shared/chart/chart.component';
import { NavComponent } from './nav/nav.component';
//import { ChartsModule } from 'ng2-charts';
import { ChartsModule } from 'angular-bootstrap-md';

@NgModule({
  declarations:
  [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ChartComponent,
    NavComponent
  ],
  imports:
  [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
