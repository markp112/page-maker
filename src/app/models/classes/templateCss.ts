export enum cssTagTypes {
  HtmlElement,
  Class,
  Id

}
export interface ICss {
  cssTagName : string;
  tagType : cssTagTypes;
  css: string;

}

export class TemplateCss {

  _cssElement: ICss;

  constructor(cssElement: ICss){
    this._cssElement = cssElement;
  }

  getClassType(): string {
    switch (this._cssElement.tagType){
      case cssTagTypes.Class:
        return "."
      case cssTagTypes.HtmlElement:
        return "#"
      default:
        return  ""
      }
  }

  buildCss(): string {
    return  `${this.getClassType()}${this._cssElement.cssTagName} \{${this._cssElement.css}\}`
  }
}
