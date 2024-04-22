import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminJobActiveOffersComponent } from './admin-job-active-offers.component';

describe('AdminJobActiveOffersComponent', () => {
  let component: AdminJobActiveOffersComponent;
  let fixture: ComponentFixture<AdminJobActiveOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminJobActiveOffersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminJobActiveOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
