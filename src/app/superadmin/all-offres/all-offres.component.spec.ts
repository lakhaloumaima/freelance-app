import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllOffresComponent } from './all-offres.component';

describe('AllOffresComponent', () => {
  let component: AllOffresComponent;
  let fixture: ComponentFixture<AllOffresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllOffresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllOffresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
