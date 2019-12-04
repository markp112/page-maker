import { ICssStyles } from '../../interfaces/cssStyle';
import { cssStyleEnum } from '../../enums/cssStylesEnum';

export class ImageStyles {
  private _url: ICssStyles;
  private _height: ICssStyles;
  private _width: ICssStyles;
  private _backgroundColour: ICssStyles;
  private _top: ICssStyles;
  private _left: ICssStyles;
  private _styles: ICssStyles[];

  public get url(): string {
    return this._url.value;
  }

  public set url(url: string) {
    this._url.value = url;
  }

  public get height(): string {
    return this._height.value;
  }

  public set height(height: string) {
    this._height.value = height;
  }

  public get width(): number {
    return parseInt(this._width.value);
  }

  public set width(width: number) {
    this._width.value = width.toString();
  }

  public get backgroundColour(): string {
    return this._backgroundColour.value;
  }

  public set backgroundColour(backgroundColour: string) {
    this._backgroundColour.value = backgroundColour;
  }

  public get top(): number {
    return parseInt(this._top.value);
  }

  public set top(top: number) {
    this._top.value = top.toString();
  }

  public get left(): number {
    return parseInt(this._left.value);
  }

  public set left(left: number) {
    this._left.value = left.toString();
  }

  constructor(url: string = "../../../../assets/images/placeholder-image.png", height: string = "auto",
    width: number = 650, top: number = 0, left: number = 0, backgroundColour: string = "rgba(241,242,244,1)") {

    this._url = {
      styleTag: "url",
      pmStyleProperty: cssStyleEnum.url,
      value: url
    };
    this._backgroundColour = {
      styleTag: "background-color",
      pmStyleProperty: cssStyleEnum.backgroundColor,
      value: backgroundColour
    };
    this._height = {
      styleTag: "height",
      pmStyleProperty: cssStyleEnum.height,
      value: height
    };
    this._width = {
      styleTag: "width",
      pmStyleProperty: cssStyleEnum.width,
      value: width.toString()
    };
    this._top = {
      styleTag: "top",
      pmStyleProperty: cssStyleEnum.top,
      value: top.toString()
    };
    this._left = {
      styleTag: "left",
      pmStyleProperty: cssStyleEnum.left,
      value: left.toString()
    };
  }

  public getStyles(): ICssStyles[] {
    this._styles = [];
    this._styles.push(this._backgroundColour);
    this._styles.push(this._url);
    this._styles.push(this._top);
    this._styles.push(this._left);
    this._styles.push(this._height);
    this._styles.push(this._width);
    return this._styles;
  }


  public setStyles(styles: ICssStyles[]) {
    styles.forEach(style => {
      switch (style.pmStyleProperty) {
        case cssStyleEnum.url:
          this._url = style;
          break;
        case cssStyleEnum.backgroundColor:
          this._backgroundColour = style;
          break;
        case cssStyleEnum.top:
          this._top = style;
          break;
        case cssStyleEnum.left:
          this._left = style;
          break;
        case cssStyleEnum.width:
          this._width = style;
          break;
        case cssStyleEnum.top:
          this._top = style;
          break;
      }
    });
  }

  public incrementDecrementSize(incrementDecrementBy: number){
    this._width.value = (parseInt(this._width.value) + incrementDecrementBy).toString();
  }

  public moveLeftRightByAmount(amount: number) {
    this._left.value = (parseInt(this._left.value) + amount).toString();
  }

  public moveUpDownByAmount(amount: number) {
    this._top.value = (parseInt(this._top.value) + amount).toString();
  }
}


