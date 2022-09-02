import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BienveniPageRoutingModule } from './bienveni-routing.module';

import { BienveniPage } from './bienveni.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BienveniPageRoutingModule
  ],
  declarations: [BienveniPage]
})
export class BienveniPageModule {}
