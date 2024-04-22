import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddInternshipOfferComponent } from './admin-add-internship-offer.component';

describe('AdminAddInternshipOfferComponent', () => {
  let component: AdminAddInternshipOfferComponent;
  let fixture: ComponentFixture<AdminAddInternshipOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddInternshipOfferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAddInternshipOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
