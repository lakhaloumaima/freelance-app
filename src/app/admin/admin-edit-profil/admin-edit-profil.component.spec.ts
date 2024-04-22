import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditProfilComponent } from './admin-edit-profil.component';

describe('AdminEditProfilComponent', () => {
  let component: AdminEditProfilComponent;
  let fixture: ComponentFixture<AdminEditProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEditProfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminEditProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
