import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffreFreelanceDetailsComponent } from './offre-freelance-details.component';

describe('OffreFreelanceDetailsComponent', () => {
  let component: OffreFreelanceDetailsComponent;
  let fixture: ComponentFixture<OffreFreelanceDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffreFreelanceDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffreFreelanceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
