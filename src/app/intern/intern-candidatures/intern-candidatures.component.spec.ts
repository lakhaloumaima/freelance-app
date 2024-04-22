import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternCandidaturesComponent } from './intern-candidatures.component';

describe('InternCandidaturesComponent', () => {
  let component: InternCandidaturesComponent;
  let fixture: ComponentFixture<InternCandidaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternCandidaturesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternCandidaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
