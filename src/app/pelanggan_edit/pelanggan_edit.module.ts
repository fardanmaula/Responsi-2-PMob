import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PelangganEditPageRoutingModule } from './pelanggan_edit-routing.module';

import { PelangganEditPage } from './pelanggan_edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PelangganEditPageRoutingModule
  ],
  declarations: [PelangganEditPage]
})
export class PelangganEditPageModule {}




/* End of file  */

/* Created at 2022-12-06 15:51:28 */
/* Mohammad Irham Akbar CRUD IONIC 6 Angular */