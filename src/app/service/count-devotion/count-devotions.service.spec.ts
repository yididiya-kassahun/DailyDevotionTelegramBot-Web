import { TestBed, inject } from '@angular/core/testing';

import { CountDevotionsService } from './count-devotions.service';

describe('CountDevotionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CountDevotionsService]
    });
  });

  it('should be created', inject([CountDevotionsService], (service: CountDevotionsService) => {
    expect(service).toBeTruthy();
  }));
});
