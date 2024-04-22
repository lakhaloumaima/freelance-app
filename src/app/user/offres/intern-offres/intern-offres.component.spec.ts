import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternOffresComponent } from './intern-offres.component';

describe('InternOffresComponent', () => {
  let component: InternOffresComponent;
  let fixture: ComponentFixture<InternOffresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternOffresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternOffresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
