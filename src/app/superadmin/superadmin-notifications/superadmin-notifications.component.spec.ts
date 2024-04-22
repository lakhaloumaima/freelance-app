import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadminNotificationsComponent } from './superadmin-notifications.component';

describe('SuperadminNotificationsComponent', () => {
  let component: SuperadminNotificationsComponent;
  let fixture: ComponentFixture<SuperadminNotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperadminNotificationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperadminNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
