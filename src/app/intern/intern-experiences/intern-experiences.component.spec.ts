import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternExperiencesComponent } from './intern-experiences.component';

describe('InternExperiencesComponent', () => {
  let component: InternExperiencesComponent;
  let fixture: ComponentFixture<InternExperiencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternExperiencesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternExperiencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
