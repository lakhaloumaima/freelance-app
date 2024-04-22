import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternCertificationsComponent } from './intern-certifications.component';

describe('InternCertificationsComponent', () => {
  let component: InternCertificationsComponent;
  let fixture: ComponentFixture<InternCertificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternCertificationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternCertificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
