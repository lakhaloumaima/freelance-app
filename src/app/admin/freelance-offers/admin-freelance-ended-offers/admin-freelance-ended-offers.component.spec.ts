import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFreelanceEndedOffersComponent } from './admin-freelance-ended-offers.component';

describe('AdminFreelanceEndedOffersComponent', () => {
  let component: AdminFreelanceEndedOffersComponent;
  let fixture: ComponentFixture<AdminFreelanceEndedOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminFreelanceEndedOffersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminFreelanceEndedOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
