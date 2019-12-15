import { Injectable } from '@angular/core';
import { ImageStyles } from 'src/app/models/classes/image-styles/image-styles';
import { ICssStyles } from 'src/app/models/interfaces/cssStyle';
import { ButtonEventEnums } from 'src/app/models/enums/ButtonEventEnums';

@Injectable({
  providedIn: 'root'
})
export class ImageFormatterService {
  private imageStyles: ImageStyles;
  private _cssStyleTag: string;
  private _value: string;


  public get cssStyleTag(): string {
    return this._cssStyleTag;
  }

  public get value(): string {
    return this._value;
  }

  public set value(value: string) {
    this._value = value;
  }

  public get height(): string {
    return `${this.imageStyles.height}px`;
  }

  public get width(): string {
    return `${this.imageStyles.width}px`;
  }

  public get top(): string {
    return `${this.imageStyles.top}px`;
  }

  public get left(): string {
    return `${this.imageStyles.left}px`;
  }

  public getAllImageStyles(): ICssStyles[] {
    return this.imageStyles.getStyles();
  }

  constructor() {
    this.imageStyles = new ImageStyles();
  }

  public processButtonClick(buttonEvent: ButtonEventEnums, propertyValue: string = ""): void {
    switch (buttonEvent) {
      case ButtonEventEnums.ImageBackgroundColour:
        this.imageStyles.backgroundColour = propertyValue;
        this._cssStyleTag = "background-color";
        this._value = propertyValue;
      case ButtonEventEnums.UploadUrl:
        this.imageStyles.url = propertyValue;
        this._cssStyleTag = "src";
        this._value = propertyValue;
      case ButtonEventEnums.UploadFile:
        this.imageStyles.url = propertyValue;
        this._cssStyleTag = "src";
        this._value = propertyValue;
      case ButtonEventEnums.ImageDecreaseSize:
        this.imageStyles.incrementDecrementSize(-1);
        this._cssStyleTag = "height";
      case ButtonEventEnums.ImageIncreaseSize:
        this.imageStyles.incrementDecrementSize(1);
      case ButtonEventEnums.ImageLeft:
        this.imageStyles.moveLeftRightByAmount(1);
      case ButtonEventEnums.ImageRight:
        this.imageStyles.moveLeftRightByAmount(-1);
      case ButtonEventEnums.ImageUp:
        this.imageStyles.moveUpDownByAmount(1);
      case ButtonEventEnums.ImageDown:
        this.imageStyles.moveUpDownByAmount(-1);
    }
  }

}
