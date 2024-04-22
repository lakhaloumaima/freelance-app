import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancerExperiencesComponent } from './freelancer-experiences.component';

describe('FreelancerExperiencesComponent', () => {
  let component: FreelancerExperiencesComponent;
  let fixture: ComponentFixture<FreelancerExperiencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreelancerExperiencesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreelancerExperiencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
