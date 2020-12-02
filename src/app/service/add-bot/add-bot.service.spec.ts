import { TestBed, inject } from '@angular/core/testing';

import { AddBotService } from './add-bot.service';

describe('AddBotService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddBotService]
    });
  });

  it('should be created', inject([AddBotService], (service: AddBotService) => {
    expect(service).toBeTruthy();
  }));
});
