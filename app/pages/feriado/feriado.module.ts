import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeriadoPageRoutingModule } from './feriado-routing.module';

import { FeriadoPage } from './feriado.page';

import { NgxDatatableModule } from '@swimlane/ngx-datatable'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeriadoPageRoutingModule,
    NgxDatatableModule
  ],
  declarations: [FeriadoPage]
})
export class FeriadoPageModule {}
