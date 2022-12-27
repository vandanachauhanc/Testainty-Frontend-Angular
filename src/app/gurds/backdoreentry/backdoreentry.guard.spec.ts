import { TestBed } from '@angular/core/testing';

import { BackdoreentryGuard } from './backdoreentry.guard';

describe('BackdoreentryGuard', () => {
  let guard: BackdoreentryGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BackdoreentryGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
