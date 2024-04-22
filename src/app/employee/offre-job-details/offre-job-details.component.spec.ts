import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffreJobDetailsComponent } from './offre-job-details.component';

describe('OffreJobDetailsComponent', () => {
  let component: OffreJobDetailsComponent;
  let fixture: ComponentFixture<OffreJobDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffreJobDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffreJobDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
