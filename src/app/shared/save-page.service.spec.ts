import { TestBed } from '@angular/core/testing';

import { SavePageService } from './save-page.service';

describe('SavePageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SavePageService = TestBed.get(SavePageService);
    expect(service).toBeTruthy();
  });
});
