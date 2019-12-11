import { TestBed } from '@angular/core/testing';

import { TextDirectiveFormatterService } from './text-directive-formatter.service';

describe('TextDirectiveFormatterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TextDirectiveFormatterService = TestBed.get(TextDirectiveFormatterService);
    expect(service).toBeTruthy();
  });
});
