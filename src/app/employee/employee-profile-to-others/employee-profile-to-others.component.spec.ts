import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeProfileToOthersComponent } from './employee-profile-to-others.component';

describe('EmployeeProfileToOthersComponent', () => {
  let component: EmployeeProfileToOthersComponent;
  let fixture: ComponentFixture<EmployeeProfileToOthersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeProfileToOthersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeProfileToOthersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
