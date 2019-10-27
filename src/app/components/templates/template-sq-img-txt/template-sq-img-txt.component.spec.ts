import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateSqImgTxtComponent } from './template-sq-img-txt.component';

describe('TemplateSqImgTxtComponent', () => {
  let component: TemplateSqImgTxtComponent;
  let fixture: ComponentFixture<TemplateSqImgTxtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateSqImgTxtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateSqImgTxtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
