import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeExperiencesComponent } from './employee-experiences.component';

describe('EmployeeExperiencesComponent', () => {
  let component: EmployeeExperiencesComponent;
  let fixture: ComponentFixture<EmployeeExperiencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeExperiencesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeExperiencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
