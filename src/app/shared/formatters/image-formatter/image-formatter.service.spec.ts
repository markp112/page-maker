import { TestBed } from '@angular/core/testing';

import { ImageFormatterService } from './image-formatter.service';

describe('ImageFormatterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImageFormatterService = TestBed.get(ImageFormatterService);
    expect(service).toBeTruthy();
  });
});
