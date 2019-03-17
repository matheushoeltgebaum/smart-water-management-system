import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartComponent } from './shared/chart/chart.component';
import { NavComponent } from './nav/nav.component';
import { ChartsModule } from 'ng2-charts';

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
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
