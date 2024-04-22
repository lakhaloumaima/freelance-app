import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelanceOffreEndedComponent } from './freelance-offre-ended.component';

describe('FreelanceOffreEndedComponent', () => {
  let component: FreelanceOffreEndedComponent;
  let fixture: ComponentFixture<FreelanceOffreEndedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreelanceOffreEndedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreelanceOffreEndedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
