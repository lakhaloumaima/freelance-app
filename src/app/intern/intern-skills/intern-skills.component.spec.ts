import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternSkillsComponent } from './intern-skills.component';

describe('InternSkillsComponent', () => {
  let component: InternSkillsComponent;
  let fixture: ComponentFixture<InternSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternSkillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
