import { TestBed } from '@angular/core/testing';

import { CutService } from './cut.service';

describe('CutService', () => {
  let service: CutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
