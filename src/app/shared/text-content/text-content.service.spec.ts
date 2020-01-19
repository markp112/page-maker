import { TestBed } from '@angular/core/testing';

import { TextContentService } from './text-content.service';

describe('TextContentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TextContentService = TestBed.get(TextContentService);
    expect(service).toBeTruthy();
  });
});
