import { Injectable } from '@angular/core';
import { ImageStyles } from 'src/app/models/classes/image-styles/image-styles';
import { TextStyles } from 'src/app/models/classes/text-styles/text-styles';
import { ICssStyles } from 'src/app/models/interfaces/cssStyle';
import { ButtonEventEnums } from 'src/app/models/enums/ButtonEventEnums';

@Injectable({
  providedIn: 'root'
})
export class StylesGeneratorService {
  private textStyles: TextStyles;
  private imageStyles: ImageStyles;

  constructor() { }

  public setTextStyle(styleElement: string, value: string ){
    this.textStyles[styleElement] = value;
  }

  public setImageStyle(styleElement: string, value: string){
    this.imageStyles[styleElement] = value;
  }

  public getTextStyle(styleElement: string): string {
    return this.textStyles[styleElement];
  }

  public getImageStyle(styleElement: string): string {
    return this.imageStyles[styleElement];
  }

  public getAllTextStyles(): ICssStyles[] {
    return this.textStyles.getStyles();
  }

  public getAllImmageStyles(): ICssStyles[] {
    return this.imageStyles.getStyles();
  }

  public cssStyleTag: string;
  private cssClass: string;
  public value: string;


  public processButtonClick(buttonEvent: ButtonEventEnums){
    if (buttonEvent === ButtonEventEnums.VerticalAlignBottom || buttonEvent === ButtonEventEnums.VerticalAlignTop || buttonEvent === ButtonEventEnums.VerticalAlignCenter) {
      this.textStyles.fontVerticalAlignment = buttonEvent.toString()
      this.cssClass = buttonEvent.toString();
    } else if (buttonEvent === ButtonEventEnums.AlignRight || buttonEvent === ButtonEventEnums.AlignLeft || event === ButtonEventEnums.AlignCenter
      || event === ButtonEventEnums.Justify)

    )

    switch (buttonEvent) {
      case ButtonEventEnums.VerticalAlignTop:
        this.textStyles.fontVerticalAlignment = buttonEvent.toString()
        this.cssClass = buttonEvent.toString();
        break;
      case ButtonEventEnums.VerticalAlignCenter:
        this.updateTextAlignment(buttonClickedEvent);
        break;
      case ButtonEventEnums.FontFamily:
        console.log(this.textStyles);
        this.textStyles.fontFamily = this.changedValue;
        this.updateElement("font-family", `${this.textStyles.fontFamily}`);
        break;
      case ButtonEventEnums.IncreaseFontSize:
        this.textStyles.incrementDecrementFont(1);
        this.updateElement("font-size", `${this.textStyles.fontSize}px`);
        break;
      case ButtonEventEnums.DecreaseFontSize:
        this.textStyles.incrementDecrementFont(-1);
        this.updateElement("font-size", `${this.textStyles.fontSize}px`);
        break;
      case ButtonEventEnums.ForeColour:
        this.textStyles.foreColour = this.changedValue;
        this.updateElement("color", `${this.textStyles.foreColour}`);
        break;
      case ButtonEventEnums.BackgroundColour:
        this.textStyles.fontBackgroundColour = this.changedValue;
        this.updateElement("background-color", `${this.textStyles.fontBackgroundColour}`);
        break;
      case ButtonEventEnums.Edit:
        this.isEditingText = !this.isEditingText;
        break;
      case ButtonEventEnums.Save:
        this.stylesCreated.emit(this.buildStylesArray());
        break;
      case ButtonEventEnums.UpdateRecord:
        this.stylesUpdated.emit(this.buildStylesArray());
        break;
    }
  }

}
