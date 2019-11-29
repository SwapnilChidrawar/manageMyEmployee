import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatListModule} from '@angular/material/list';

import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    MatListModule
  ],
  exports: [SidebarComponent],
  declarations: [SidebarComponent]
})
export class ResuableModule { }
