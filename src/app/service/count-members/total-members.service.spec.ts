import { TestBed, inject } from '@angular/core/testing';

import { TotalMembersService } from './total-members.service';

describe('TotalMembersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TotalMembersService]
    });
  });

  it('should be created', inject([TotalMembersService], (service: TotalMembersService) => {
    expect(service).toBeTruthy();
  }));
});
