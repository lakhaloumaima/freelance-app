import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternHeaderComponent } from './intern-header.component';

describe('InternHeaderComponent', () => {
  let component: InternHeaderComponent;
  let fixture: ComponentFixture<InternHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
