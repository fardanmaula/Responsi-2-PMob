
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PelangganEditPage } from './pelanggan_edit.page';

describe('PelangganEditPage', () => {
  let component: PelangganEditPage;
  let fixture: ComponentFixture<PelangganEditPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PelangganEditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PelangganEditPage);
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