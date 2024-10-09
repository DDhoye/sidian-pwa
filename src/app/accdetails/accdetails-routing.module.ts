import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccdetailsPage } from './accdetails.page';

const routes: Routes = [
  {
    path: '',
    component: AccdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccdetailsPageRoutingModule {}
