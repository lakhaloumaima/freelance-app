import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelanceOffresComponent } from './freelance-offres.component';

describe('FreelanceOffresComponent', () => {
  let component: FreelanceOffresComponent;
  let fixture: ComponentFixture<FreelanceOffresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreelanceOffresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreelanceOffresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
