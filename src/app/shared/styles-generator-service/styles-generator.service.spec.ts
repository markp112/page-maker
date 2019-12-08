import { TestBed } from '@angular/core/testing';

import { StylesGeneratorService } from './styles-generator.service';

describe('StylesGeneratorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StylesGeneratorService = TestBed.get(StylesGeneratorService);
    expect(service).toBeTruthy();
  });
});
