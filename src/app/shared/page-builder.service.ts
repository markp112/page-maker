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
import {
  textHorizontalAlignment,
  textVerticalAlignment
} from "../models/enums/text-component.enum";

import { FireStorageService } from '../shared/fire-storage.service'
import { IStatusMessage } from '../models/interfaces/status-message';
import { HtmlBuilder } from '../models/classes/templateHtml';
import { resolve } from 'q';

@Injectable({
  providedIn: "root"
})
export class PageBuilderService {
  constructor(private fireStorage: FireStorageService) { }

  isTextStyle(
    styleLayout: ILayout | IImageLayout | ITextLayout
  ): styleLayout is ITextLayout {
    return (styleLayout as ITextLayout).textStyles !== undefined;
  }

  isImageStyle(
    styleLayout: ILayout | IImageLayout | ITextLayout
  ): styleLayout is IImageLayout {
    return (styleLayout as IImageLayout).imageStyles !== undefined;
  }

  //todo - Add a property for the filename and path
  createPage(pageData: IPage, pageLayout: ILayout): Promise<IStatusMessage> {
    let css: string = "";
    if (pageLayout.className !== "") {
      css = `.${pageLayout.className} \{${pageLayout.cssClass}`;
    } else css = pageLayout.cssClass;

    return new Promise((resolve, reject) => {
      css += this.processChildren(pageLayout.children);
      this.writeCSS(css)
      .then(result => {
          this.buildHtml(pageLayout,"main.css");
          resolve(result)
        })
      .catch(err => reject(err));
  })
}

  buildHtml(layouts: ILayout, cssFileName: string): Promise<IStatusMessage> {
    let htmlBuilder: HtmlBuilder = new HtmlBuilder('Test Page');
    let htmlContent: string;

    return new Promise((resolve, reject) => {
      htmlContent = htmlBuilder.buildHtml(layouts);
    })

  }

  processTextStyles(layout: ITextLayout): string {
    let css: string = "";
    if (layout.className !== "") css = `.${layout.className} \{${layout.cssClass}`;
    else css = layout.cssClass;
    layout.styles.forEach(style => {
      switch (style.styleTag) {
        case "text-align":
          css += `${this.getHorizontalAlignment(layout.textStyles[style.pmStyleProperty])};`;
          break;
        case "justify-content":
          css += `${this.getVerticalAlignment(layout.textStyles[style.pmStyleProperty])};`;
          break;
        default:
          css += `${style.styleTag}:${layout.textStyles[style.pmStyleProperty]};`;
      }
    })
    css += "}";
    return css;
  }

  processImageStyles(layout: IImageLayout): string {
    let css: string = "";
    if (layout.className !== "") {
      css = `.${layout.className} \{${layout.cssClass}`
    } else css = layout.cssClass;
    layout.styles.forEach(style => {
      if (style.styleTag === "top" || style.styleTag === "left") {
        css += `${style.styleTag}:${layout.imageStyles["position"][style.pmStyleProperty]};`;
      } else {
        css += `${style.styleTag}:${layout.imageStyles[style.pmStyleProperty]};`;
      }
    })
    css += "}";
    return css;
  }

  processChildren(children: ILayout[]): string {
    let css = "";
    children.forEach(child => {
      console.log("image child", child);
      if (this.isTextStyle(child)) {
        css += this.processTextStyles(child);
      } else if (this.isImageStyle(child)) {
        css += this.processImageStyles(child);
      }
      if (child.children.length > 0) css += this.processChildren(child.children);
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
  private writeHTML(pageData: IPage, pageHtml: string) { }

  private writeCSS(css):Promise<IStatusMessage> {
    return new Promise((resolve,reject) => {
      this.fireStorage.writeNewFile("main.css", "publishedFiles", css)
        .then(result => {
          resolve(result);
        })
        .catch(err => reject(err));
    });
  }
}
