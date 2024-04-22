import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelanceOffreInprogressComponent } from './freelance-offre-inprogress.component';

describe('FreelanceOffreInprogressComponent', () => {
  let component: FreelanceOffreInprogressComponent;
  let fixture: ComponentFixture<FreelanceOffreInprogressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreelanceOffreInprogressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreelanceOffreInprogressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
