import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternFavoritListComponent } from './intern-favorit-list.component';

describe('InternFavoritListComponent', () => {
  let component: InternFavoritListComponent;
  let fixture: ComponentFixture<InternFavoritListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternFavoritListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternFavoritListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
