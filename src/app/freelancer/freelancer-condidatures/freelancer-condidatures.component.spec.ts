import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancerCondidaturesComponent } from './freelancer-condidatures.component';

describe('FreelancerCondidaturesComponent', () => {
  let component: FreelancerCondidaturesComponent;
  let fixture: ComponentFixture<FreelancerCondidaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreelancerCondidaturesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreelancerCondidaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
