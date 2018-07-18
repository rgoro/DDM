import { TestBed, inject } from '@angular/core/testing';

import { EntityListResolverService } from './entity-list-resolver.service';

describe('EntityListResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EntityListResolverService]
    });
  });

  it('should be created', inject([EntityListResolverService], (service: EntityListResolverService) => {
    expect(service).toBeTruthy();
  }));
});
