import { Injectable } from "@angular/core";
import { ImageStyles } from "src/app/models/classes/image-styles/image-styles";
import { TextStyles } from "src/app/models/classes/text-styles/text-styles";
import { ICssStyles } from "src/app/models/interfaces/cssStyle";
import { ButtonEventEnums } from "src/app/models/enums/ButtonEventEnums";

@Injectable({
  providedIn: "root"
})
export class StylesGeneratorService {
  private textStyles: TextStyles;
  private imageStyles: ImageStyles;

  private _cssStyleTag: string;
  private _cssClass: string;
  private _value: string;

  public get cssStyleTag(): string {
    return this._cssStyleTag;
  }

  public get cssClass(): string {
    return this._cssClass;
  }

  public get value() {
    return this._value;
  }
  constructor() {
    this.textStyles = new TextStyles();
    this.imageStyles = new ImageStyles();
  }

  public getAllTextStyles(): ICssStyles[] {
    return this.textStyles.getStyles();
  }

  public getAllImmageStyles(): ICssStyles[] {
    return this.imageStyles.getStyles();
  }

  public processButtonClick(
    buttonEvent: ButtonEventEnums,
    propertyValue: string = ""
  ): void {
    this._value = "";
    this._cssClass = "";
    this._cssStyleTag = "";

    if (
      buttonEvent === ButtonEventEnums.VerticalAlignBottom ||
      buttonEvent === ButtonEventEnums.VerticalAlignTop ||
      buttonEvent === ButtonEventEnums.VerticalAlignCenter
    ) {
      this.textStyles.fontVerticalAlignment = buttonEvent.toString();
      this._cssClass = buttonEvent.toString();
    } else if (
      buttonEvent === ButtonEventEnums.AlignRight ||
      buttonEvent === ButtonEventEnums.AlignLeft ||
      buttonEvent === ButtonEventEnums.AlignCenter ||
      buttonEvent === ButtonEventEnums.Justify
    ) {
      this.textStyles.fontHorizontalAlignment = buttonEvent.toString();
      this._cssClass = buttonEvent.toString();
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

      case ButtonEventEnums.ImageUp:
        this.imageStyles.moveUpDownByAmount(-1);
        this._cssStyleTag = "top";
        this._value = `${this.imageStyles.top}px`;
        break;
      case ButtonEventEnums.ImageDown:
        this.imageStyles.moveUpDownByAmount(1);
        this._cssStyleTag = "top";
        this._value = `{this.imageStyles.top}px`;
        break;
      case ButtonEventEnums.ImageLeft:
        this.imageStyles.moveLeftRightByAmount(1);
        this._cssStyleTag = "left";
        this._value = `${this.imageStyles.left}px`;
        break;
      case ButtonEventEnums.ImageRight:
        this.imageStyles.moveLeftRightByAmount(-1);
        this._cssStyleTag = "left";
        this._value = `${this.imageStyles.left}px`;
        break;
      case ButtonEventEnums.ImageIncreaseSize:
        this.imageStyles.incrementDecrementSize(1);
        this._cssStyleTag = "height, width";
        this._value = `/{height: ${this.imageStyles.height}px, width: ${this.imageStyles.width}px}`;
        break;
      case ButtonEventEnums.ImageDecreaseSize:
        this.imageStyles.incrementDecrementSize(-1);
        this._cssStyleTag = "height, width";
        this._value = `/{height: ${this.imageStyles.height}px, width: ${this.imageStyles.width}px}`;
        break;
      case ButtonEventEnums.ImageBackgroundColour:
        this.imageStyles.backgroundColour = propertyValue;
        this._cssStyleTag = "background-color";
        break;
      case ButtonEventEnums.UploadUrl:
        this.imageStyles.url = propertyValue;
        break;
      case ButtonEventEnums.UploadFile:
        this.imageStyles.url = propertyValue;
        break;
    }
  }
}
