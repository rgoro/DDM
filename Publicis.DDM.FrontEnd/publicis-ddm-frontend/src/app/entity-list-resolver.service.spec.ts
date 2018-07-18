import { TestBed, inject } from '@angular/core/testing';

import { EntityListResolver } from './entity-list-resolver.service';

describe('EntityListResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EntityListResolver]
    });
  });

  it('should be created', inject([EntityListResolver], (service: EntityListResolver) => {
    expect(service).toBeTruthy();
  }));
});
