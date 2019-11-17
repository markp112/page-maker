import { Injectable } from '@angular/core';
import { IPage } from '../models/interfaces/page';
import { IPageMaster } from '../models/interfaces/pageMaster';
import { pageLayoutTypes } from '../models/enums/pageLayouts.enum';
import { PageAreaTypes } from '../models/enums/pageAreaTypes.enum';
import { IText } from '../models/interfaces/text';
import { textHorizontalAlignment, textVerticalAlignment } from '../models/enums/text-component.enum';
import { text } from '@fortawesome/fontawesome-svg-core';
import { IImage } from '../models/interfaces/image';

@Injectable({
  providedIn: 'root'
})
export class PageBuilderService {

  constructor() { }

  createPage(pageData: IPage, pageLayout: IPageMaster) {

    let css: string = pageLayout.pageLayoutCss;
    console.log('pageLayout.AreaNames :', pageLayout.AreaNames);
    pageLayout.AreaNames.forEach(area => {

      switch (area.areaType) {
        case PageAreaTypes.textArea:
          css += this.buildTextCss(pageData.textAreas, area.areaName);
          console.log("Text Css = ", css)
          break;
        case PageAreaTypes.imageArea:

          break;
      }
    })

  }

  private buildTextCss(textAreas: IText[], className: string): string {

    let textCss: string = `.${className}\{`;
    textAreas.forEach(area => {
      textCss += `${area.container};`;
      textCss += `font-family:${area.font};`;
      textCss += `font-size:${area.size}px;`;
      textCss += `${this.getHorizontalAlignment(area.horizontalAlignment)};`;
      textCss += `${this.getVerticalAlignment(area.verticalAlignment)};`;
      textCss += `color:${area.color};`;
      textCss += `background-color:${area.backgroundColor};`;
    })
    textCss +="}";
    return textCss;
  }
  private buildImageCss(imageAreas: IImage[], className:string): string {
    return "";
  }

  private getHorizontalAlignment(horizontalAlignment: textHorizontalAlignment) {
    switch (horizontalAlignment) {
      case textHorizontalAlignment.alignLeft:
        return 'text-align:left';
      case textHorizontalAlignment.alignRight:
        return 'text-align:right';
      case textHorizontalAlignment.alignCenter:
        return 'text-align:center';
      case textHorizontalAlignment.alignJustify:
        return 'text-align:justify';
    }
  }

  private getVerticalAlignment(verticalAlignment: textVerticalAlignment) {
    switch (verticalAlignment) {
      case textVerticalAlignment.alignBottom:
        return 'justify-content:flex-end';
      case textVerticalAlignment.alignTop:
        return 'justify-content:flex-start';
      case textVerticalAlignment.alignCenter:
        return 'justify-content:centre';
    }
  }
  private writeHTML(pageData: IPage, pageHtml: string, ) {


  }

  private writeCSS(pageData: IPage, pageStyling: string[]) {

  }

}
