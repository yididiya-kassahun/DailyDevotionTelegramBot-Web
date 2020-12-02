import { TestBed, inject } from '@angular/core/testing';

import { PostedDevotionsService } from './posted-devotions.service';

describe('PostedDevotionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostedDevotionsService]
    });
  });

  it('should be created', inject([PostedDevotionsService], (service: PostedDevotionsService) => {
    expect(service).toBeTruthy();
  }));
});
