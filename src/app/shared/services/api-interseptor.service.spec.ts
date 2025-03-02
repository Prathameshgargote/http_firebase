import { TestBed } from '@angular/core/testing';

import { ApiInterseptorService } from './api-interseptor.service';

describe('ApiInterseptorService', () => {
  let service: ApiInterseptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiInterseptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
