import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffreFreelanceCondidatureComponent } from './offre-freelance-condidature.component';

describe('OffreFreelanceCondidatureComponent', () => {
  let component: OffreFreelanceCondidatureComponent;
  let fixture: ComponentFixture<OffreFreelanceCondidatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffreFreelanceCondidatureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffreFreelanceCondidatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
