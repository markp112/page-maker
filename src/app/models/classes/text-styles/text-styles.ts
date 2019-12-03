import { ICssStyles } from '../../interfaces/cssStyle';
import { cssStyleEnum } from '../../enums/cssStylesEnum';

export class TextStyles {
  private _fontFamily: ICssStyles;
  private _fontSize: ICssStyles;
  private _foreColour: ICssStyles;
  private _fontBackgroundColour: ICssStyles;
  private _fontVerticalAlignment: ICssStyles;
  private _fontHorizontalAlignment: ICssStyles;
  private _styles: ICssStyles[];


  public get fontFamily(): string {
    return this._fontFamily.value;
  }

  public set fontFamily(fontFamily: string) {
    this._fontFamily.value = fontFamily;
  }

  public get fontSize(): number {
    return parseInt(this._fontSize.value);
  }

  public set fontSize(fontSize: number) {
    this._fontSize.value = fontSize.toString();
  }

  public get foreColour(): string {
    return this._foreColour.value;
  }

  public set foreColour(foreColour: string) {
    this._foreColour.value = foreColour;
  }

  public get fontBackgroundColour(): string {
    return this._fontBackgroundColour.value;
  }

  public set fontBackgroundColour(fontBackgroundColour: string) {
    this._fontBackgroundColour.value = fontBackgroundColour;
  }

  public get fontVerticalAlignment(): string {
    return this._fontVerticalAlignment.value;
  }

  public set fontVerticalAlignment(fontVerticalAlignment: string) {
    this._fontVerticalAlignment.value = fontVerticalAlignment;
  }

  public get fontHorizontalAlignment(): string {
    return this._fontHorizontalAlignment.value;
  }

  public set fontHorizontalAlignment(fontHorizontalAlignment: string) {
    this._fontHorizontalAlignment.value = fontHorizontalAlignment;
  }
  constructor(fontFamily: string = 'Monterra', fontSize: number = 16, foreColour: string = 'rgba(242,226,213, 1',
    backgroundColour: string = 'rgba(38,1,89, 1)', horizontalAlignment: string = 'align-content-left',
    verticalAlignment: string = 'vertical-align-top') {
    this._fontFamily = {
      styleTag: "font-family",
      pmStyleProperty: cssStyleEnum.fontFamily,
      value: fontFamily
    };
    this._fontSize = {
      styleTag: "font-size",
      pmStyleProperty: cssStyleEnum.fontSize,
      value: fontSize.toString()
    };
    this._foreColour = {
      styleTag: "color",
      pmStyleProperty: cssStyleEnum.color,
      value: foreColour
    };
    this._fontBackgroundColour = {
      styleTag: "background-color",
      pmStyleProperty: cssStyleEnum.backgroundColor,
      value: backgroundColour
    };
    this._fontHorizontalAlignment = {
      styleTag: "text-align",
      pmStyleProperty: cssStyleEnum.horizontalAlignment,
      value: horizontalAlignment
    };
    this._fontVerticalAlignment = {
      styleTag: "justify-content",
      pmStyleProperty: cssStyleEnum.verticalAlignment,
      value: verticalAlignment
    };
    console.log("fontFamily =",this._fontFamily)
  }

  public getStyles(): ICssStyles[] {
    this._styles = [];
    this._styles.push(this._fontBackgroundColour);
    this._styles.push(this._fontFamily);
    this._styles.push(this._fontSize);
    this._styles.push(this._foreColour);
    this._styles.push(this._fontHorizontalAlignment);
    this._styles.push(this._fontVerticalAlignment);
    return this._styles;
  }

  public setStyles(styles: ICssStyles[]) {
    styles.forEach(style => {
      switch (style.pmStyleProperty) {
        case cssStyleEnum.color:
          this._foreColour = style;
          break;
        case cssStyleEnum.fontFamily:
          this._fontFamily = style;
          break;
        case cssStyleEnum.fontSize:
          this._fontSize = style;
          break;
        case cssStyleEnum.horizontalAlignment:
          this._fontHorizontalAlignment = style;
          break;
        case cssStyleEnum.verticalAlignment:
          this._fontVerticalAlignment = style;
          break;
      }
    });
  }

  public incrementDecrementFont(incrementDecrementBy: number) {
    this._fontSize.value = (parseInt(this._fontSize.value) + incrementDecrementBy).toString();
  }

}
