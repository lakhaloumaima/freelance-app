import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternProfileToOthersComponent } from './intern-profile-to-others.component';

describe('InternProfileToOthersComponent', () => {
  let component: InternProfileToOthersComponent;
  let fixture: ComponentFixture<InternProfileToOthersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternProfileToOthersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternProfileToOthersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
