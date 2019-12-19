import { Injectable } from '@angular/core';
import { TextStyles } from 'src/app/models/classes/text-styles/text-styles';
import { ICssStyles } from 'src/app/models/interfaces/cssStyle';
import { ButtonEventEnums } from 'src/app/models/enums/ButtonEventEnums';
import { cssStyleEnum } from 'src/app/models/enums/cssStylesEnum';

@Injectable({
  providedIn: 'root'
})
export class TextDirectiveFormatterService {


  private textStyles: TextStyles;
  private _cssStyleTag: string;
  private _cssClass: string;
  private _value: string;
  private _isHorizontalFormatter: boolean = false;
  private _isVerticalFormatter: boolean = false;

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

  public processButtonClick(buttonEvent: ButtonEventEnums, propertyValue: string = ""): void {
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
        this._value = propertyValue;
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
        this._value = propertyValue;
        this._cssStyleTag = "color";
        break;
      case ButtonEventEnums.BackgroundColour:
        this.textStyles.fontBackgroundColour = propertyValue;
        this._value = propertyValue;
        this._cssStyleTag = "background-color";
        break;
    }
  }

  public createStylesFromData(theStyles: ICssStyles[]): void {
    theStyles.forEach(aStyle => {
      switch (aStyle.pmStyleProperty) {
        case cssStyleEnum.color:
          this.textStyles.foreColour = aStyle.value;
          break;
        case cssStyleEnum.fontFamily:
          this.textStyles.fontFamily = aStyle.value;
          break;
        case cssStyleEnum.fontSize:
          this.textStyles.fontSize = parseInt(aStyle.value);
          break;
        case cssStyleEnum.justify:
          this.textStyles.fontHorizontalAlignment = aStyle.value
          break;
        case cssStyleEnum.horizontalAlignment:
          this.textStyles.fontHorizontalAlignment = aStyle.value;
          break;
        case cssStyleEnum.verticalAlignment:
          this.textStyles.fontVerticalAlignment = aStyle.value;
          break;
        case cssStyleEnum.backgroundColor:
          this.textStyles.fontBackgroundColour = aStyle.value;
          break;
      }
    });
  }

}
