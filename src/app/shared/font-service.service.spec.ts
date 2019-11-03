import { TestBed } from '@angular/core/testing';

import { FontServiceService } from './font-service.service';

describe('FontServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FontServiceService = TestBed.get(FontServiceService);
    expect(service).toBeTruthy();
  });
});
