import { Injectable } from '@angular/core';
import { TextStyles } from 'src/app/models/classes/text-styles/text-styles';
import { ICssStyles } from 'src/app/models/interfaces/cssStyle';
import { ButtonEventEnums } from 'src/app/models/enums/ButtonEventEnums';

@Injectable({
  providedIn: 'root'
})
export class TextDirectiveFormatterService {

  private textStyles: TextStyles;
  private _cssStyleTag: string;
  private _cssClass: string;
  private _value: string;
  private _isHorizontalFormatter: false;
  private _isVerticalFormatter: false;

constructor() {
    this.textStyles = new TextStyles();
}

  public get cssStyleTag(): string {
    return this._cssStyleTag;
  }

  public get cssClass(): string {
    return this._cssClass;
  }

  public get value() {
    return this._value;
  }

  public get isVerticalFormatter(): boolean {
    return this._isVerticalFormatter;
  }

  public get isHorizontalFormatter(): boolean {
    return this._isHorizontalFormatter;
  }


  public getAllTextStyles(): ICssStyles[] {
    return this.textStyles.getStyles();
  }

  public processButtonClick(
      buttonEvent: ButtonEventEnums,
      propertyValue: string = ""): void {
    this._value = "";
    this._cssClass = "";
    this._cssStyleTag = "";
    this._isVerticalFormatter = false;
    this._isHorizontalFormatter = false;
    if (
      buttonEvent === ButtonEventEnums.VerticalAlignBottom ||
      buttonEvent === ButtonEventEnums.VerticalAlignTop ||
      buttonEvent === ButtonEventEnums.VerticalAlignCenter
    ) {
      this.textStyles.fontVerticalAlignment = buttonEvent.toString();
      this._cssClass = buttonEvent.toString();
      this._isVerticalFormatter = true;
    } else if (
      buttonEvent === ButtonEventEnums.AlignRight ||
      buttonEvent === ButtonEventEnums.AlignLeft ||
      buttonEvent === ButtonEventEnums.AlignCenter ||
      buttonEvent === ButtonEventEnums.Justify
    ) {
      this.textStyles.fontHorizontalAlignment = buttonEvent.toString();
      this._cssClass = buttonEvent.toString();
      this._isHorizontalFormatter = true;
    }

    switch (buttonEvent) {
      case ButtonEventEnums.FontFamily:
        this.textStyles.fontFamily = propertyValue;
        this._cssStyleTag = "font-family";
        break;
      case ButtonEventEnums.IncreaseFontSize:
        this.textStyles.incrementDecrementFont(1);
        this._value = `${this.textStyles.fontSize}px`;
        this._cssStyleTag = "font-size";
        break;
      case ButtonEventEnums.DecreaseFontSize:
        this.textStyles.incrementDecrementFont(-1);
        this._value = `${this.textStyles.fontSize}px`;
        this._cssStyleTag = "font-size";
        break;
      case ButtonEventEnums.ForeColour:
        this.textStyles.foreColour = propertyValue;
        this._cssStyleTag = "color";
        break;
      case ButtonEventEnums.BackgroundColour:
        this.textStyles.fontBackgroundColour = propertyValue;
        this._cssStyleTag = "background-color";
        break;
    }
  }
}