import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancerProfileToOthersComponent } from './freelancer-profile-to-others.component';

describe('FreelancerProfileToOthersComponent', () => {
  let component: FreelancerProfileToOthersComponent;
  let fixture: ComponentFixture<FreelancerProfileToOthersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreelancerProfileToOthersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreelancerProfileToOthersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
