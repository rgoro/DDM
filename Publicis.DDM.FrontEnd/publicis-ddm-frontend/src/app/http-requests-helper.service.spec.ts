import { TestBed, inject } from '@angular/core/testing';

import { HttpRequestsHelperService } from './http-requests-helper.service';

describe('HttpRequestsHelperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpRequestsHelperService]
    });
  });

  it('should be created', inject([HttpRequestsHelperService], (service: HttpRequestsHelperService) => {
    expect(service).toBeTruthy();
  }));
});
