import { AuthenticationService } from '../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  Id: any;
  password: any;
  constructor(
    private authService: AuthenticationService,
    private router: Router,
    public menuCtrl: MenuController
  ) {}
  ngOnInit() {}
  ionViewDidEnter() {
    this.menuCtrl.enable(false);
  }
  ionViewWillLeave() {
    this.menuCtrl.enable(true);
  }
  prosesLogin(): void {
    if (this.Id != null && this.password != null) {
      const data = {
        Id: this.Id,
        password: this.password,
      };
      this.authService.postMethod(data, 'proses_login.php').subscribe({
        next: (hasil) => {
          if (hasil.status_login == 'berhasil') {
            this.authService.saveData('token', hasil.token);
            this.authService.saveData('Id', hasil.Id);
            this.Id = null;
            this.password = null;
            this.router.navigateByUrl('/pelanggan');
          } else {
            this.authService.notifikasi('Id dan Password Salah');
          }
        },
        error: (e) => {
          this.authService.notifikasi('Gagal Login, periksa koneksi internet');
        },
      });
    } else {
      this.authService.notifikasi('Id dan Password Tidak Boleh Kosong');
    }
  }
}
