import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddJobOfferComponent } from './admin-add-job-offer.component';

describe('AdminAddJobOfferComponent', () => {
  let component: AdminAddJobOfferComponent;
  let fixture: ComponentFixture<AdminAddJobOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddJobOfferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAddJobOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
