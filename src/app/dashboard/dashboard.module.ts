import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatGridListModule } from '@angular/material/grid-list';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ResuableModule } from '../resuable/resuable.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ResuableModule,
    MatGridListModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
