import { TestBed } from '@angular/core/testing';

import { IsntLoggedGuard } from './isnt-logged.guard';

describe('IsntLoggedGuard', () => {
  let guard: IsntLoggedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsntLoggedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
