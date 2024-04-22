import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeEditProfilComponent } from './employee-edit-profil.component';

describe('EmployeeEditProfilComponent', () => {
  let component: EmployeeEditProfilComponent;
  let fixture: ComponentFixture<EmployeeEditProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeEditProfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeEditProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
