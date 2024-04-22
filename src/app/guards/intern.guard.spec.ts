import { TestBed } from '@angular/core/testing';

import { InternGuard } from './intern.guard';

describe('InternGuard', () => {
  let guard: InternGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(InternGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
