import { Injectable } from "@angular/core";
import { ImageStyles } from "src/app/models/classes/image-styles/image-styles";
import { ICssStyles } from "src/app/models/interfaces/cssStyle";
import { ButtonEventEnums } from "src/app/models/enums/ButtonEventEnums";

@Injectable({
  providedIn: "root"
})
export class ImageFormatterService {
  private imageStyles: ImageStyles;
  private _cssStyleTag: string[];
  private _value: string[];

  public get cssStyleTag(): string[] {
    return this._cssStyleTag;
  }

  public get value(): string[] {
    return this._value;
  }

  public getAllImageStyles(): ICssStyles[] {
    return this.imageStyles.getStyles();
  }

  constructor() {
    this.imageStyles = new ImageStyles();
  }

  public processButtonClick(
    buttonEvent: ButtonEventEnums,
    propertyValue: string = ""
  ): void {
    this._value = [];
    this._cssStyleTag = [];
    switch (buttonEvent) {
      case ButtonEventEnums.ImageBackgroundColour:
        this.imageStyles.backgroundColour = propertyValue;
        this._cssStyleTag.push("background-color");
        this._value.push(propertyValue);
        break;
      case ButtonEventEnums.UploadUrl:
        this.imageStyles.url = propertyValue;
        this._cssStyleTag.push("src");
        this._value.push(propertyValue);
        break;
      case ButtonEventEnums.UploadFile:
        this.imageStyles.url = propertyValue;
        this._cssStyleTag.push("src");
        this._value.push(propertyValue);
        break;
      case ButtonEventEnums.ImageDecreaseSize:
        this.imageStyles.incrementDecrementSize(-1);
        this._cssStyleTag.push("height");
        this._value.push(`${this.imageStyles.height}px`);
        this._cssStyleTag.push("width");
        this._value.push(`${this.imageStyles.width}px`);
        break;
      case ButtonEventEnums.ImageIncreaseSize:
        this.imageStyles.incrementDecrementSize(1);
        this._cssStyleTag.push("height");
        this._value.push(`${this.imageStyles.height}px`);
        this._cssStyleTag.push("width");
        this._value.push(`${this.imageStyles.width}px`);
        break;
      case ButtonEventEnums.ImageLeft:
        this.imageStyles.moveLeftRightByAmount(-1);
        this._cssStyleTag.push("left");
        this._value.push(`${this.imageStyles.left}px`);
        break;
      case ButtonEventEnums.ImageRight:
        this.imageStyles.moveLeftRightByAmount(1);
        this._cssStyleTag.push("left");
        this._value.push(`${this.imageStyles.left}px`);
        break;
      case ButtonEventEnums.ImageUp:
        this.imageStyles.moveUpDownByAmount(-1);
        this._cssStyleTag.push("top");
        this._value.push(`${this.imageStyles.top}px`);
        break;
      case ButtonEventEnums.ImageDown:
        this.imageStyles.moveUpDownByAmount(1);
        this._cssStyleTag.push("top");
        this._value.push(`${this.imageStyles.top}px`);
        break;
    }
  }
}
