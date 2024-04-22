import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancerEditProfiComponent } from './freelancer-edit-profi.component';

describe('FreelancerEditProfiComponent', () => {
  let component: FreelancerEditProfiComponent;
  let fixture: ComponentFixture<FreelancerEditProfiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreelancerEditProfiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreelancerEditProfiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
