import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternTrainingsComponent } from './intern-trainings.component';

describe('InternTrainingsComponent', () => {
  let component: InternTrainingsComponent;
  let fixture: ComponentFixture<InternTrainingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternTrainingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternTrainingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
