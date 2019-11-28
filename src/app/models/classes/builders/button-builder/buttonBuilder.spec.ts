import { IntegrationComponent } from "@nology/angular-test-simplifier";
import { Component } from "@angular/core";
import { ButtonBuilder } from './butonBuilder';
import { IIconButton } from 'src/app/models/interfaces/icon-button-interface';
import { styles } from 'src/app/models/enums/icon-buton-styles.enum';

describe("cancelButton Constructor",() => {
    let component: ButtonBuilder;
    let cancelButton: IIconButton = ButtonBuilder.CancelButton();

    it("should return an object with an event name of cancelClicked",() => {
        expect(cancelButton.eventName).toEqual('cancelClicked');
    })

    it("should return an object with a style set to icon",() => {
        expect(cancelButton.style).toEqual(styles.Icon);
    })


    
})