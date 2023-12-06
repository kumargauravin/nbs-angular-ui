import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    MatCardModule
  ],
  declarations: [
    DashboardComponent
  ],
})
export class DashboardModule { }
