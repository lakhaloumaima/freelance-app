import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInternshipInterviewComponent } from './admin-internship-interview.component';

describe('AdminInternshipInterviewComponent', () => {
  let component: AdminInternshipInterviewComponent;
  let fixture: ComponentFixture<AdminInternshipInterviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminInternshipInterviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminInternshipInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
