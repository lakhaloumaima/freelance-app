import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancerCertificationsComponent } from './freelancer-certifications.component';

describe('FreelancerCertificationsComponent', () => {
  let component: FreelancerCertificationsComponent;
  let fixture: ComponentFixture<FreelancerCertificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreelancerCertificationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreelancerCertificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
