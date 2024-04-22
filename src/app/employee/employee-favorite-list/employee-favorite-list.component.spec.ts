import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeFavoriteListComponent } from './employee-favorite-list.component';

describe('EmployeeFavoriteListComponent', () => {
  let component: EmployeeFavoriteListComponent;
  let fixture: ComponentFixture<EmployeeFavoriteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeFavoriteListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeFavoriteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
