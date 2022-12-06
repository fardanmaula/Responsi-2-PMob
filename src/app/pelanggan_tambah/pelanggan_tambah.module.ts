import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PelangganTambahPageRoutingModule } from './pelanggan_tambah-routing.module';

import { PelangganTambahPage } from './pelanggan_tambah.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PelangganTambahPageRoutingModule
  ],
  declarations: [PelangganTambahPage]
})
export class PelangganTambahPageModule {}




/* End of file  */

/* Created at 2022-12-06 15:51:28 */
/* Mohammad Irham Akbar CRUD IONIC 6 Angular */