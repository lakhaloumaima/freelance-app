import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCondidaturesComponent } from './employee-condidatures.component';

describe('EmployeeCondidaturesComponent', () => {
  let component: EmployeeCondidaturesComponent;
  let fixture: ComponentFixture<EmployeeCondidaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeCondidaturesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeCondidaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
