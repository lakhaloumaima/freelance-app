import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeInterviewComponent } from './employee-interview.component';

describe('EmployeeInterviewComponent', () => {
  let component: EmployeeInterviewComponent;
  let fixture: ComponentFixture<EmployeeInterviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeInterviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
