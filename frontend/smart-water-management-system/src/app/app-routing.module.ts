import { AuthGuard } from './../common/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { YearlyConsumptionComponent } from './yearly-consumption/yearly-consumption.component';
import { MonthlyConsumptionComponent } from './monthly-consumption/monthly-consumption.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'yearly', component: YearlyConsumptionComponent, canActivate: [AuthGuard] },
  { path: 'monthly', component: MonthlyConsumptionComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
