import { TextFormatterDirectiveDirective } from './text-formatter-directive.directive';
import { Component } from '@angular/core';
import { IntegrationComponent } from "@nology/angular-test-simplifier";
import { ButtonEventEnums } from 'src/app/models/enums/ButtonEventEnums';
import { ICssStyles } from 'src/app/models/interfaces/cssStyle';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  template:'<div class="text-area" appTextFormatterDirective [buttonEvent]="buttonClickEvent" [changedValue]="changedValue" (styles)="testStylesOutput()"></div>'
})
export class MockParentComponent {
  buttonClickEvent: ButtonEventEnums = ButtonEventEnums.Edit;
  changedValue: string;
  testStylesOutput(params:any):ICssStyles[] {
    return params;
  }
}

describe('TextFormatterDirectiveDirective', () => {
  let testDirectiveTextFormatter: IntegrationComponent<TextFormatterDirectiveDirective, MockParentComponent>;

  beforeEach(() => {
    testDirectiveTextFormatter = new IntegrationComponent<TextFormatterDirectiveDirective, MockParentComponent>(
      TextFormatterDirectiveDirective, MockParentComponent);
    testDirectiveTextFormatter.configure({
      declarations:[],
      imports:[FontAwesomeModule],
      providers:[]
    });
    testDirectiveTextFormatter.initialise();
  });


  it('should create an instance', () => {
    // const directive = new TextFormatterDirectiveDirective();
    expect(testDirectiveTextFormatter).toBeTruthy();
  });

  it('should receive the event of te button clicked from the parent', () => {
    testDirectiveTextFormatter.parentInstance.buttonClickEvent = ButtonEventEnums.Edit;
    expect(testDirectiveTextFormatter.instance.buttonEvent).toBe(ButtonEventEnums.Edit);
  })

  it('should when edit is clicked set isEditing to true', () => {

  })

});
