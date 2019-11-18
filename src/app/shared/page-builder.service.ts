import { Injectable } from '@angular/core';
import { IPage } from '../models/interfaces/page';
// import { IPageMaster } from '../models/interfaces/pageMaster';
// import { pageLayoutTypes } from '../models/enums/pageLayouts.enum';
// import { PageAreaTypes } from '../models/enums/pageAreaTypes.enum';
import { ILayout, ITextLayout, IImageLayout } from '../models/interfaces/layout'
import { IText } from '../models/interfaces/text';
import { textHorizontalAlignment, textVerticalAlignment } from '../models/enums/text-component.enum';
import { text } from '@fortawesome/fontawesome-svg-core';
import { IImage } from '../models/interfaces/image';
import { ICssStyles } from '../models/interfaces/cssStyle';

@Injectable({
  providedIn: 'root'
})
export class PageBuilderService {

  constructor() { }


  isTextStyle(styleLayout: ITextLayout | IImageLayout): styleLayout is ITextLayout {
    return (styleLayout as ITextLayout).textStyles !== undefined;
  }


  createPage(pageData: IPage, pageLayout: ILayout) {
    console.log("pageLayout = ", pageLayout)

    let css: string = pageLayout.cssClass;
    // styles apply to the current element
    // if (pageLayout.styles.length > 0) css += this.processTextStyles();
    css += this.processChildren(pageLayout.children);
    console.log('css=', css);
  }



  processTextStyles(layout: ITextLayout): string {
    let css = layout.cssClass;
    layout.styles.forEach(style => {
      css +=`${style.styleTag}:layout.textStyles[style.pmStyleProperty]`
    })
    console.log("child styles =", css)
    return css;
  }

  processImageStyles(styles: IImageLayout) {

  };

  processChildren(children: ILayout[]) {
    //check for style
    let css = "";
    children.forEach(child => {
      if (this.isTextStyle(child)) {
        this.processTextStyles(child);
      } else {
        this.processImageStyles(child);
      }
    })
  // }
  // private buildTextCss(textAreas: IText[], className: string): string {

  //   let textCss: string = `.${className}\{`;
  //   textAreas.forEach(area => {
  //     textCss += `${area.container};`;
  //     textCss += `font-family:${area.font};`;
  //     textCss += `font-size:${area.size}px;`;
  //     textCss += `${this.getHorizontalAlignment(area.horizontalAlignment)};`;
  //     textCss += `${this.getVerticalAlignment(area.verticalAlignment)};`;
  //     textCss += `color:${area.color};`;
  //     textCss += `background-color:${area.backgroundColor};`;
  //   })
  //   textCss += "}";
  //   return textCss;
  // }
  // private buildImageCss(imageAreas: IImage[], className: string): string {
  //   return "";
  // }

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
