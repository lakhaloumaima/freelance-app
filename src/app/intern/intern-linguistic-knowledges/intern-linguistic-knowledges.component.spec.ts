import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternLinguisticKnowledgesComponent } from './intern-linguistic-knowledges.component';

describe('InternLinguisticKnowledgesComponent', () => {
  let component: InternLinguisticKnowledgesComponent;
  let fixture: ComponentFixture<InternLinguisticKnowledgesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternLinguisticKnowledgesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternLinguisticKnowledgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
