import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsistQRPageRoutingModule } from './asist-qr-routing.module';

import { AsistQRPage } from './asist-qr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsistQRPageRoutingModule
  ],
  declarations: [AsistQRPage]
})
export class AsistQRPageModule {}
