import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminJobInterviewComponent } from './admin-job-interview.component';

describe('AdminJobInterviewComponent', () => {
  let component: AdminJobInterviewComponent;
  let fixture: ComponentFixture<AdminJobInterviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminJobInterviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminJobInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
