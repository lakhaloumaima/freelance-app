import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancerFavoriteListComponent } from './freelancer-favorite-list.component';

describe('FreelancerFavoriteListComponent', () => {
  let component: FreelancerFavoriteListComponent;
  let fixture: ComponentFixture<FreelancerFavoriteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreelancerFavoriteListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreelancerFavoriteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
