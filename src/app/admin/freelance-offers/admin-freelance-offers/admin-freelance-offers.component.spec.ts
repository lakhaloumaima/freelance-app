import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFreelanceOffersComponent } from './admin-freelance-offers.component';

describe('AdminFreelanceOffersComponent', () => {
  let component: AdminFreelanceOffersComponent;
  let fixture: ComponentFixture<AdminFreelanceOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminFreelanceOffersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminFreelanceOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
