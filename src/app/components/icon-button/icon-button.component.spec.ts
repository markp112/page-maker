import { Component } from "@angular/core";
import { IconButtonComponent } from './icon-button.component';
import { IIconButton } from "src/app/models/interfaces/icon-button-interface"
import { ButtonBuilder } from '../../models/classes/builders/button-builder/butonBuilder';
import { styles } from "src/app/models/enums/icon-buton-styles.enum"
import { IntegrationComponent } from '@nology/angular-test-simplifier';
import { FontAwesomeModule,  } from '@fortawesome/angular-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';

@Component({
  template:
  '<app-icon-button  [iconButton]="iconButton" (clickEvent)="testClick($event)"></app-icon-button>'
})

class MockParentComponent {
  iconButton: IIconButton = ButtonBuilder.CancelButton();
  testClick(input: any) {
    return input;
  };
}

describe('IconButtonComponent', () => {
  let testIconButton: IntegrationComponent<IconButtonComponent, MockParentComponent>;


  beforeEach(() => {
    testIconButton = new IntegrationComponent<IconButtonComponent, MockParentComponent> (
      IconButtonComponent,
      MockParentComponent
    );


    testIconButton.configure({
      imports:[FontAwesomeModule],

    })
    testIconButton.initialise();

  });

  it('should create', () => {
    expect(testIconButton).toBeTruthy();
  });

  it('should get a button object from the parent', ()=>{
    let aTestButton:IIconButton = {
      icon: faWindowClose,
      text: "",
      eventName: "cancelClicked",
      style: styles.Icon,
      enabled: true
  };
        testIconButton.setParentProps({iconButton: aTestButton});
        expect(testIconButton.instance.iconButton).toEqual(aTestButton);
  })
});
