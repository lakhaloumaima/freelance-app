import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInternshipActiveOffersComponent } from './admin-internship-active-offers.component';

describe('AdminInternshipActiveOffersComponent', () => {
  let component: AdminInternshipActiveOffersComponent;
  let fixture: ComponentFixture<AdminInternshipActiveOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminInternshipActiveOffersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminInternshipActiveOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
