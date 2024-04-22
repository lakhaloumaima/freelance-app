import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestiComponent } from './testi.component';

describe('TestiComponent', () => {
  let component: TestiComponent;
  let fixture: ComponentFixture<TestiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
