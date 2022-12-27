import { TestBed } from '@angular/core/testing';

import { CandidatetestsubmitService } from './candidatetestsubmit.service';

describe('CandidatetestsubmitService', () => {
  let service: CandidatetestsubmitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CandidatetestsubmitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
