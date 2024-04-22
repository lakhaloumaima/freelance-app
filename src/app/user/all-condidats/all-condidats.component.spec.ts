import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCondidatsComponent } from './all-condidats.component';

describe('AllCondidatsComponent', () => {
  let component: AllCondidatsComponent;
  let fixture: ComponentFixture<AllCondidatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllCondidatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllCondidatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
