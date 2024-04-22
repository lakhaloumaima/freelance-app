import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardInternComponent } from './dashboard-intern.component';

describe('DashboardInternComponent', () => {
  let component: DashboardInternComponent;
  let fixture: ComponentFixture<DashboardInternComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardInternComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardInternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
