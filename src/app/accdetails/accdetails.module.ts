import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccdetailsPageRoutingModule } from './accdetails-routing.module';

import { AccdetailsPage } from './accdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AccdetailsPageRoutingModule,
  ],
  declarations: [AccdetailsPage],
})
export class AccdetailsPageModule {}
