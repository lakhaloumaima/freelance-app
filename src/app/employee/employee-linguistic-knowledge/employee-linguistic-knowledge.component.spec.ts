import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeLinguisticKnowledgeComponent } from './employee-linguistic-knowledge.component';

describe('EmployeeLinguisticKnowledgeComponent', () => {
  let component: EmployeeLinguisticKnowledgeComponent;
  let fixture: ComponentFixture<EmployeeLinguisticKnowledgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeLinguisticKnowledgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeLinguisticKnowledgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
