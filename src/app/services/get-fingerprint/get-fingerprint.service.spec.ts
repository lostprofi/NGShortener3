import { TestBed } from '@angular/core/testing';

import { GetFingerprintService } from './get-fingerprint.service';

describe('GetFingerprintService', () => {
  let service: GetFingerprintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetFingerprintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
