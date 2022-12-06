
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PelangganEditPage } from './pelanggan_edit.page';

const routes: Routes = [
  {
    path: '',
    component: PelangganEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PelangganEditPageRoutingModule {}






/* End of file  */

/* Created at 2022-12-06 15:51:28 */
/* Mohammad Irham Akbar CRUD IONIC 6 Angular */