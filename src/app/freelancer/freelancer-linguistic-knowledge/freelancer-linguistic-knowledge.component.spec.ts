import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancerLinguisticKnowledgeComponent } from './freelancer-linguistic-knowledge.component';

describe('FreelancerLinguisticKnowledgeComponent', () => {
  let component: FreelancerLinguisticKnowledgeComponent;
  let fixture: ComponentFixture<FreelancerLinguisticKnowledgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreelancerLinguisticKnowledgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreelancerLinguisticKnowledgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
