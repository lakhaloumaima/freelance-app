import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancerTrainingComponent } from './freelancer-training.component';

describe('FreelancerTrainingComponent', () => {
  let component: FreelancerTrainingComponent;
  let fixture: ComponentFixture<FreelancerTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreelancerTrainingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreelancerTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
