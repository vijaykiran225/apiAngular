import { TestBed, inject } from '@angular/core/testing';

import { DisputeApiServService } from './dispute-api-serv.service';

describe('DisputeApiServService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DisputeApiServService]
    });
  });

  it('should be created', inject([DisputeApiServService], (service: DisputeApiServService) => {
    expect(service).toBeTruthy();
  }));
});
