import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FontDropDownComponent } from './font-drop-down.component';

describe('FontDropDownComponent', () => {
  let component: FontDropDownComponent;
  let fixture: ComponentFixture<FontDropDownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FontDropDownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FontDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
