import { Injectable } from "@angular/core";
import { IPage } from "../models/interfaces/page";
// import { IPageMaster } from '../models/interfaces/pageMaster';
// import { pageLayoutTypes } from '../models/enums/pageLayouts.enum';
// import { PageAreaTypes } from '../models/enums/pageAreaTypes.enum';
import { ILayout } from "../models/interfaces/layout";
import {
  textHorizontalAlignment,
  textVerticalAlignment
} from "../models/enums/text-component.enum";
import { FireStorageService } from '../shared/fire-storage.service'
import { IStatusMessage } from '../models/interfaces/status-message';
import { HtmlBuilder } from '../models/classes/templateHtml';
import { HtmlTagsEnum } from '../models/enums/htmlTags';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { ICssStyles } from '../models/interfaces/cssStyle';
import { cssStyleEnum } from '../models/enums/cssStylesEnum';
import { ITextAlignment } from '../models/interfaces/text';



@Injectable({
  providedIn: "root"
})
export class PageBuilderService {
  constructor(private fireStorage: FireStorageService) { }

  private cssContent: string;
  private htmlContent: string;

  //todo - Add a property for the filename and path
  createPage(pageData: IPage, cssFileName: string): Promise<IStatusMessage> {
    let pageLayout: ILayout = pageData.layout;
    let css: string = "";
    this.createPageLayout(pageLayout)


    return new Promise((resolve, reject) => {
      css += this.processChildren(pageLayout.children);
      this.writeCSS(css)
      .then(result => {
          this.buildHtml(pageLayout, cssFileName)
          .then(Htmlpage => {
            //write Html Page to file
            this.writeHTML(Htmlpage)
            .then (result => resolve(result))
          })
        })
      .catch(err => reject(err));
  })
}


getCssClass(layout:ILayout): string {
  let className: string = "";
  if(layout.className != "") className = `.${layout.className}\{${layout.cssClass}`
  if(layout.styles.length > 0 && className !=="") {
    layout.styles.forEach(style => {
      if (style.pmStyleProperty == cssStyleEnum.horizontalAlignment) className += `${style.styleTag}:${this.getHorizontalAlignment(style.value)};`
      className += `${style.styleTag}:${style.value};`
    });
  }
  if(className !== "") className += "}";
  return className;
}

createPageLayout(pageLayout: ILayout){
  this.cssContent += this.getCssClass(pageLayout);
}

buildHtml(layouts: ILayout, cssFileName: string):Promise<string> {
    let htmlBuilder: HtmlBuilder = new HtmlBuilder('Test Page');
    return new Promise((resolve, reject) => {
      htmlBuilder.buildHtml(layouts,cssFileName)
      .then(htmlContent => resolve(htmlContent));

    })

  }


  private getHorizontalAlignment(value: string) {
    let horizontalAlignment: ITextAlignment = ITextAlignment[parseInt(value)]
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
  private writeHTML(htmlPage: string):Promise<IStatusMessage> {
    return new Promise((resolve,reject) => {
      this.fireStorage.writeNewFile("index.html", "publishedFiles", htmlPage)
        .then(result => {
          resolve(result);
        })
        .catch(err => reject(err));
    });
  }

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
