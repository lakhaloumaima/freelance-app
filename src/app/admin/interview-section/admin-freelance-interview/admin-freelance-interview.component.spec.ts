import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFreelanceInterviewComponent } from './admin-freelance-interview.component';

describe('AdminFreelanceInterviewComponent', () => {
  let component: AdminFreelanceInterviewComponent;
  let fixture: ComponentFixture<AdminFreelanceInterviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminFreelanceInterviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminFreelanceInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
