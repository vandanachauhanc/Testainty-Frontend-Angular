import { TestBed } from '@angular/core/testing';

import { TestevolutionService } from './testevolution.service';

describe('TestevolutionService', () => {
  let service: TestevolutionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestevolutionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
