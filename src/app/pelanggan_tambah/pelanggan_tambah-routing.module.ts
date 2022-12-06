
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PelangganTambahPage } from './pelanggan_tambah.page';

const routes: Routes = [
  {
    path: '',
    component: PelangganTambahPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PelangganTambahPageRoutingModule {}






/* End of file  */

/* Created at 2022-12-06 15:51:28 */
/* Mohammad Irham Akbar CRUD IONIC 6 Angular */