import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffreInternshipDetailsComponent } from './offre-internship-details.component';

describe('OffreInternshipDetailsComponent', () => {
  let component: OffreInternshipDetailsComponent;
  let fixture: ComponentFixture<OffreInternshipDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffreInternshipDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffreInternshipDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
