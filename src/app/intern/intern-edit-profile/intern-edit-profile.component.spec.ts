import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternEditProfileComponent } from './intern-edit-profile.component';

describe('InternEditProfileComponent', () => {
  let component: InternEditProfileComponent;
  let fixture: ComponentFixture<InternEditProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternEditProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternEditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
