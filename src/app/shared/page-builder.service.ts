import { Injectable } from "@angular/core";
import { IPage } from "../models/interfaces/page";
// import { IPageMaster } from '../models/interfaces/pageMaster';
// import { pageLayoutTypes } from '../models/enums/pageLayouts.enum';
// import { PageAreaTypes } from '../models/enums/pageAreaTypes.enum';
import {
  ILayout,
  ITextLayout,
  IImageLayout
} from "../models/interfaces/layout";
import { IText } from "../models/interfaces/text";
import {
  textHorizontalAlignment,
  textVerticalAlignment
} from "../models/enums/text-component.enum";
import { IImage } from "../models/interfaces/image";
import { ICssStyles } from "../models/interfaces/cssStyle";

@Injectable({
  providedIn: "root"
})
export class PageBuilderService {
  constructor() {}

  isTextStyle(
    styleLayout: ILayout | IImageLayout | ITextLayout
  ): styleLayout is ITextLayout {
    return (styleLayout as ITextLayout).textStyles !== undefined;
  }

  createPage(pageData: IPage, pageLayout: ILayout) {
    console.log("pageLayout = ", pageLayout);
    let css: string = "";
    if (pageLayout.className !== "") {
      css = `.${pageLayout.className} \{${pageLayout.cssClass}`;
    } else css = pageLayout.cssClass;

    css += this.processChildren(pageLayout.children);
    console.log("css=", css);
  }

  processTextStyles(layout: ITextLayout): string {
    let css: string = "";
    if (layout.className !== "")
      css = `.${layout.className} \{${layout.cssClass}`;
    else css = layout.cssClass;

    layout.styles.forEach(style => {
      if (
        style.styleTag === "text-align" ||
        style.styleTag === "justify-content"
      ) {
        if (style.styleTag === "text-align") {
          css += `${this.getHorizontalAlignment(
            layout.textStyles[style.pmStyleProperty]
          )};`;
        }
        if (style.styleTag === "justify-content") {
          css += `${this.getVerticalAlignment(
            layout.textStyles[style.pmStyleProperty]
          )};`;
        }
      } else {
        css += `${style.styleTag}:${layout.textStyles[style.pmStyleProperty]};`;
      }
    });
    css += "}";
    return css;
  }

  processImageStyles(styles: ILayout) {

  }

  processChildren(children: ILayout[]):string {
    //check for style
    let css = "";
    children.forEach(child => {
       console.log("image child", child);
      if (this.isTextStyle(child)) {
        css += this.processTextStyles(child);
      } else {
       
        css+= this.processImageStyles(child);
      }
    });
    
    return css;
  }

  private getHorizontalAlignment(horizontalAlignment: textHorizontalAlignment) {
    switch (horizontalAlignment) {
      case textHorizontalAlignment.alignLeft:
        return "text-align:left";
      case textHorizontalAlignment.alignRight:
        return "text-align:right";
      case textHorizontalAlignment.alignCenter:
        return "text-align:center";
      case textHorizontalAlignment.alignJustify:
        return "text-align:justify";
    }
  }

  private getVerticalAlignment(verticalAlignment: textVerticalAlignment) {
    switch (verticalAlignment) {
      case textVerticalAlignment.alignBottom:
        return "justify-content:flex-end";
      case textVerticalAlignment.alignTop:
        return "justify-content:flex-start";
      case textVerticalAlignment.alignCenter:
        return "justify-content:centre";
    }
  }
  private writeHTML(pageData: IPage, pageHtml: string) {}

  private writeCSS(pageData: IPage, pageStyling: string[]) {}
}
