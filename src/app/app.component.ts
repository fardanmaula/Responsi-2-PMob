import { Component, ɵbypassSanitizationTrustResourceUrl } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [{ title: 'Pelanggan', url: '/pelanggan', icon: 'people' }];
  public labels = [''];
  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {}

  isAdmin() {
    if (this.authService.getData('peran') == 'Anggota') return false;
    else return true;
  }

  logout() {
    this.authService.logout(); // lempar ke authService lalu cari fungsi logout
    this.router.navigateByUrl('/', { replaceUrl: true }); // alihkan ke halama
  }
}
