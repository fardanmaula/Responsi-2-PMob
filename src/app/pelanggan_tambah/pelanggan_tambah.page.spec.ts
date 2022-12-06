
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PelangganTambahPage } from './pelanggan_tambah.page';

describe('PelangganTambahPage', () => {
  let component: PelangganTambahPage;
  let fixture: ComponentFixture<PelangganTambahPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PelangganTambahPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PelangganTambahPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});





/* End of file  */

/* Created at 2022-12-06 15:51:28 */
/* Mohammad Irham Akbar CRUD IONIC 6 Angular */