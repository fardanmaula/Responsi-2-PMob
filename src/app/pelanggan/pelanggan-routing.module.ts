
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PelangganPage } from './pelanggan.page';

const routes: Routes = [
  {
    path: '',
    component: PelangganPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PelangganPageRoutingModule {}






/* End of file  */

/* Created at 2022-12-06 15:51:28 */
/* Mohammad Irham Akbar CRUD IONIC 6 Angular */