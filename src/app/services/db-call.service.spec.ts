import { TestBed } from '@angular/core/testing';

import { DbCallService } from './db-call.service';

describe('DbCallService', () => {
  let service: DbCallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbCallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
