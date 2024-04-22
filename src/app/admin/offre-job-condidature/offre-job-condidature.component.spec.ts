import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffreJobCondidatureComponent } from './offre-job-condidature.component';

describe('OffreJobCondidatureComponent', () => {
  let component: OffreJobCondidatureComponent;
  let fixture: ComponentFixture<OffreJobCondidatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffreJobCondidatureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffreJobCondidatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
