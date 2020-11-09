import { TestBed, inject } from '@angular/core/testing';

import { SendDevotionService } from './send-devotion.service';

describe('SendDevotionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SendDevotionService]
    });
  });

  it('should be created', inject([SendDevotionService], (service: SendDevotionService) => {
    expect(service).toBeTruthy();
  }));
});
