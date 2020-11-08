import { TestBed, inject } from '@angular/core/testing';

import { DevotionService } from './devotion.service';

describe('DevotionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DevotionService]
    });
  });

  it('should be created', inject([DevotionService], (service: DevotionService) => {
    expect(service).toBeTruthy();
  }));
});
