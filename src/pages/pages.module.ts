import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { PagesComponent } from './pages.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DashboardModule } from './dashboard/dashboard.module';

import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  imports: [
    MatCardModule,
    PagesRoutingModule,
    DashboardModule,
  ],
  declarations: [
    PagesComponent,
    NotFoundComponent
  ],
})
export class PagesModule {
}
