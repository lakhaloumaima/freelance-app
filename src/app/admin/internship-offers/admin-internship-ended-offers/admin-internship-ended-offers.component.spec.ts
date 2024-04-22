import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInternshipEndedOffersComponent } from './admin-internship-ended-offers.component';

describe('AdminInternshipEndedOffersComponent', () => {
  let component: AdminInternshipEndedOffersComponent;
  let fixture: ComponentFixture<AdminInternshipEndedOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminInternshipEndedOffersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminInternshipEndedOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
