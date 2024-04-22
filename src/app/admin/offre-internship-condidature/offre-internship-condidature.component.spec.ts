import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffreInternshipCondidatureComponent } from './offre-internship-condidature.component';

describe('OffreInternshipCondidatureComponent', () => {
  let component: OffreInternshipCondidatureComponent;
  let fixture: ComponentFixture<OffreInternshipCondidatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffreInternshipCondidatureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffreInternshipCondidatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
