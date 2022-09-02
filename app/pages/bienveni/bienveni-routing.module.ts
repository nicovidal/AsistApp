import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BienveniPage } from './bienveni.page';

const routes: Routes = [
  {
    path: '',
    component: BienveniPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BienveniPageRoutingModule {}
