import { TestBed } from '@angular/core/testing';

import { AllresultService } from './allresult.service';

describe('AllresultService', () => {
  let service: AllresultService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllresultService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
