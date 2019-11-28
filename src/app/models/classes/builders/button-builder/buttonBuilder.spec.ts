import { TestComponent } from "@nology/angular-test-simplifier";
import { Component } from "@angular/core";
import { ButtonBuilder } from './butonBuilder';
import { IIconButton } from 'src/app/models/interfaces/icon-button-interface';
import { styles } from 'src/app/models/enums/icon-buton-styles.enum';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';

describe("cancelButton Constructor",() => {

    let cancelButton: IIconButton = ButtonBuilder.CancelButton();

    it("should return an object with an event name of cancelClicked",() => {
        expect(cancelButton.eventName).toEqual('cancelClicked');
    })

    it("should return an object with a style set to icon",() => {
        expect(cancelButton.style).toEqual(styles.Icon);
    })

    it("should return an object with enabled set to true",() => {
      expect(cancelButton.enabled).toBeTruthy();
    })

    it("should return an object with an icon set to FaWinClose",() => {
      expect(cancelButton.icon).toEqual(faWindowClose);
  })

})
