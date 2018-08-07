import { TestBed, inject } from '@angular/core/testing';

import { SearchBarService } from './search-bar.service';

describe('SearchBarOdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchBarService]
    });
  });

  it('should be created', inject([SearchBarService], (service: SearchBarService) => {
    expect(service).toBeTruthy();
  }));
});
