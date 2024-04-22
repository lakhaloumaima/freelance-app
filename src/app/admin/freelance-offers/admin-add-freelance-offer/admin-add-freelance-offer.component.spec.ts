import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddFreelanceOfferComponent } from './admin-add-freelance-offer.component';

describe('AdminAddFreelanceOfferComponent', () => {
  let component: AdminAddFreelanceOfferComponent;
  let fixture: ComponentFixture<AdminAddFreelanceOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddFreelanceOfferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAddFreelanceOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
