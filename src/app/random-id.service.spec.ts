import { TestBed, inject } from '@angular/core/testing';

import { RandomIdService } from './random-id.service';

describe('RandomIdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RandomIdService]
    });
  });

  it('should be created', inject([RandomIdService], (service: RandomIdService) => {
    expect(service).toBeTruthy();
  }));
});
