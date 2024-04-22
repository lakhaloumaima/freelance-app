import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadminEditProfilComponent } from './superadmin-edit-profil.component';

describe('SuperadminEditProfilComponent', () => {
  let component: SuperadminEditProfilComponent;
  let fixture: ComponentFixture<SuperadminEditProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperadminEditProfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperadminEditProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
