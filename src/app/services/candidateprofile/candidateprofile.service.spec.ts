import { TestBed } from '@angular/core/testing';

import { CandidateprofileService } from './candidateprofile.service';

describe('CandidateprofileService', () => {
  let service: CandidateprofileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CandidateprofileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
