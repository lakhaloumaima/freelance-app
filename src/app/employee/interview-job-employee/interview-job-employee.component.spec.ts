import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewJobEmployeeComponent } from './interview-job-employee.component';

describe('InterviewJobEmployeeComponent', () => {
  let component: InterviewJobEmployeeComponent;
  let fixture: ComponentFixture<InterviewJobEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterviewJobEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterviewJobEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
