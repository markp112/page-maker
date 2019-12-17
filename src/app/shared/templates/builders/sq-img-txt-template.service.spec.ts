import { TestBed } from '@angular/core/testing';

import { SqImgTxtTemplateService } from './sq-img-txt-template.service';

describe('SqImgTxtTemplateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SqImgTxtTemplateService = TestBed.get(SqImgTxtTemplateService);
    expect(service).toBeTruthy();
  });
});
