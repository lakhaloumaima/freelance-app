import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInternshipOffersComponent } from './admin-internship-offers.component';

describe('AdminInternshipOffersComponent', () => {
  let component: AdminInternshipOffersComponent;
  let fixture: ComponentFixture<AdminInternshipOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminInternshipOffersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminInternshipOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
