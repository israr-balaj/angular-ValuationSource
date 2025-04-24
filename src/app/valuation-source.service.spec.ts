import { TestBed } from '@angular/core/testing';

import { ValuationSourceService } from './valuation-source.service';

describe('ValuationSourceService', () => {
  let service: ValuationSourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValuationSourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
