import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutoLoginGuard } from './guards/auto-login.guard';
import { AuthGuard } from './guards/auth.guard';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
    canLoad: [AutoLoginGuard],
  },
  {
    path: 'pelanggan',
    loadChildren: () =>
      import('./pelanggan/pelanggan.module').then((m) => m.PelangganPageModule),
    canLoad: [AuthGuard], // Secure all child pages
  },
  {
    path: 'pelanggan_tambah',
    loadChildren: () =>
      import('./pelanggan_tambah/pelanggan_tambah.module').then(
        (m) => m.PelangganTambahPageModule
      ),
    canLoad: [AuthGuard], // Secure all child pages
  },
  {
    path: 'pelanggan_edit/:id',
    loadChildren: () =>
      import('./pelanggan_edit/pelanggan_edit.module').then(
        (m) => m.PelangganEditPageModule
      ),
    canLoad: [AuthGuard], // Secure all child pages
  },
  {
    path: 'folder/:id',
    loadChildren: () =>
      import('./folder/folder.module').then((m) => m.FolderPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
