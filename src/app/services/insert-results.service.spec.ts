import { TestBed } from '@angular/core/testing';

import { InsertResultsService } from './insert-results.service';

describe('InsertResultsService', () => {
  let service: InsertResultsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsertResultsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
