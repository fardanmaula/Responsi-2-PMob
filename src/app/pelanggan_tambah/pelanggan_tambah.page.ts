
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-pelanggan_tambah',
  templateUrl: './pelanggan_tambah.page.html',
  styleUrls: ['./pelanggan_tambah.page.scss'],
})
export class PelangganTambahPage implements OnInit {
  id: any;
   
								nama: any;
								alamat: any;
								noHP: any;
  constructor(
    private router: Router,
    public _apiService: ApiService,

  ) { }

  ngOnInit() {
  }

  addPelanggan() {
    let data = {
								nama: this.nama,
								alamat: this.alamat,
								noHP: this.noHP,
    }
    this._apiService.tambah(data, '/tambahPelanggan.php')
      .subscribe({
        next: (hasil: any) => {
          console.log(hasil);
          this.id = '';
								 this.nama='';
								 this.alamat='';
								 this.noHP='';
          this._apiService.notif('berhasil input Pelanggan');
          this.router.navigateByUrl('/pelanggan');
        },
        error: (err: any) => {
          this._apiService.notif('gagal input Pelanggan');
        }
      })
  }

}





/* End of file  */

/* Created at 2022-12-06 15:51:28 */
/* Mohammad Irham Akbar CRUD IONIC 6 Angular */