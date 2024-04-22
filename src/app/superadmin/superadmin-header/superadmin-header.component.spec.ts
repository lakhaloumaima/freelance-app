import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadminHeaderComponent } from './superadmin-header.component';

describe('SuperadminHeaderComponent', () => {
  let component: SuperadminHeaderComponent;
  let fixture: ComponentFixture<SuperadminHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperadminHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperadminHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
