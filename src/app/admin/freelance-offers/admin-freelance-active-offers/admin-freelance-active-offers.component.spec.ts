import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFreelanceActiveOffersComponent } from './admin-freelance-active-offers.component';

describe('AdminFreelanceActiveOffersComponent', () => {
  let component: AdminFreelanceActiveOffersComponent;
  let fixture: ComponentFixture<AdminFreelanceActiveOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminFreelanceActiveOffersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminFreelanceActiveOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
