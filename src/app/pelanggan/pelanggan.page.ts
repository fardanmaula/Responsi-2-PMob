
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-pelanggan',
  templateUrl: './pelanggan.page.html',
  styleUrls: ['./pelanggan.page.scss'],
})
export class PelangganPage {
  page = 0;
  perPage = 10;
  pelanggan: any[] = [];
  lists: any[] = [];
  constructor(
    public _apiService: ApiService,
    private alertController: AlertController,
  ) {

  }

  ngOnInit() {
    console.log('cek fungsi halaman event init jalan');
  }

  ionViewDidEnter() {
    console.log('jika selesai loading');
    this.page = 0;
    this.perPage = 10;
    this.getPelanggan();
  }

  paginateArray() {
    this.page++;
    return this.pelanggan.filter(
      x => x.urutan_list > (this.page * this.perPage - this.perPage) && x.urutan_list <= (this.page * this.perPage)
    );
  }

  getPelanggan() {
    this._apiService.tampil('tampilPelanggan.php').subscribe({
      next: (res: any) => {
        console.log('sukses', res);
        this.pelanggan = res;
        this.lists = this.paginateArray();
      },
      error: (err:any) => {
        console.log(err);
      },
    })
  }

  doRefresh(event:any) {
    console.log('Mulai Refresh Konten');
    setTimeout(() => {
      console.log('Selesai Refresh Konten');
      event.target.complete();
      this.page = 0;
      this.perPage = 10;
      this.getPelanggan();
    }, 2000);
  }

  loadMore(event:any) {
    console.log(event);
    setTimeout(() => {
      const array = this.paginateArray();
      console.log('new data: ', array);
      this.lists = this.lists.concat(array);
      console.log('list data: ', this.lists);
      event.target.complete();
      if (array?.length < this.perPage) {
        event.target.disabled = true;
      };
    }, 1000);
  }

  deletePelanggan(id: any) {
    this.alertController.create({
      header: 'perhatian',
      subHeader: 'Yakin menghapus data ini?',
      buttons: [
        {
          text: 'Batal',
          handler: (data: any) => {
            console.log('dibatalkan', data);
          }
        },
        {
          text: 'Yakin',
          handler: (data: any) => {
            //jika tekan yakin
            this._apiService.hapus(id, '/hapusPelanggan.php?id=').subscribe({
              next: (res: any) => {
                console.log('sukses', res);
                this.page = 0;
                this.perPage = 10;
                this.getPelanggan();
              },
              error: (error: any) => {
                this._apiService.notif('gagal');
              }
            })
          }
        }
      ]
    }).then(res => {
      res.present();
    })
  }

}




/* End of file  */

/* Created at 2022-12-06 15:51:28 */
/* Mohammad Irham Akbar CRUD IONIC 6 Angular */