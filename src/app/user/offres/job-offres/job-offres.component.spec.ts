import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOffresComponent } from './job-offres.component';

describe('JobOffresComponent', () => {
  let component: JobOffresComponent;
  let fixture: ComponentFixture<JobOffresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobOffresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobOffresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
