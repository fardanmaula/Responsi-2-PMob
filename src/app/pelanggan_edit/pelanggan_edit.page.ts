
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-pelanggan_edit',
  templateUrl: './pelanggan_edit.page.html',
  styleUrls: ['./pelanggan_edit.page.scss'],
})
export class PelangganEditPage implements OnInit {
   id: any;
								nama: any;
								alamat: any;
								noHP: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public _apiService: ApiService,
  ) {
    this.route.params.subscribe((param: any) => {
      this.id = param.id;
      console.log(this.id);
      this.ambilPelanggan(this.id);
    })
  }

  ngOnInit() {
  }

  ambilPelanggan(id: any) {
    this._apiService.lihat(id, '/lihatPelanggan.php?id=').subscribe({
      next: (hasil: any) => {
        console.log('sukses', hasil);
        let pelanggan = hasil; 
								 this.nama= pelanggan.nama;
								 this.alamat= pelanggan.alamat;
								 this.noHP= pelanggan.noHP;
      },
      error: (error: any) => {
        this._apiService.notif('gagal ambil data');
      }
    })
  }

  editPelanggan() {
    let data = {
      id: this.id,
								 nama:this.nama,
								 alamat:this.alamat,
								 noHP:this.noHP,
    }
    this._apiService.edit(data, '/editPelanggan.php')
      .subscribe({
        next: (hasil: any) => {
          console.log(hasil);
          this.id = '';
								 this.nama='';
								 this.alamat='';
								 this.noHP='';
          this._apiService.notif('berhasil edit Pelanggan');
          this.router.navigateByUrl('/pelanggan');
        },
        error: (err: any) => {
          this._apiService.notif('gagal edit Pelanggan');
        }
      })
  }

 

}




/* End of file  */

/* Created at 2022-12-06 15:51:28 */
/* Mohammad Irham Akbar CRUD IONIC 6 Angular */