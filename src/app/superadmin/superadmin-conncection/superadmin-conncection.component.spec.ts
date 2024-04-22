import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadminConncectionComponent } from './superadmin-conncection.component';

describe('SuperadminConncectionComponent', () => {
  let component: SuperadminConncectionComponent;
  let fixture: ComponentFixture<SuperadminConncectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperadminConncectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperadminConncectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
