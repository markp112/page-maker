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
import { IStatusMessage, messageTypes } from '../models/interfaces/status-message';
import { HtmlBuilder } from '../models/classes/templateHtml';
import { cssStyleEnum } from '../models/enums/cssStylesEnum';



@Injectable({
  providedIn: "root"
})
export class PageBuilderService {
  constructor(private fireStorage: FireStorageService) { }

  private cssContent: string ='';


  //todo - Add a property for the filename and path
  createPage(pageData: IPage, cssFileName: string): Promise<IStatusMessage> {
    let pageLayout: ILayout = pageData.layout;
    this.createPageLayout(pageLayout)
    return new Promise((resolve, reject) => {
      this.writeCSS(this.cssContent)
      .then(result => {
          this.buildHtml(pageLayout, cssFileName)
          .then(Htmlpage => {
            this.writeHTML(Htmlpage)
            .then (result =>{
              let statusMessage: IStatusMessage ={messageType: messageTypes.information, message: "Requested page has been created"}
              resolve(statusMessage)})
            .catch(err => reject(err));
          })
        })
      .catch(err => reject(err));
  })
}


getCssClass(layout:ILayout): string {
  let className: string = "";
  if(layout.className !== undefined) className = `.${layout.className}\{${layout.cssClass}`
  if(layout.styles.length > 0 && className !== undefined) {
    layout.styles.forEach(style => {
      if (style.pmStyleProperty == cssStyleEnum.horizontalAlignment) className += `${this.getHorizontalAlignment(style.value)};`
      else if (style.pmStyleProperty == cssStyleEnum.verticalAlignment) className += `${this.getVerticalAlignment(style.value)};`
      else className += this.getStyleTag(style);
    });
  }
  if(className !== "") className += "}";
  return className;
}
  getStyleTag(style: import("../models/interfaces/cssStyle").ICssStyles) {
    if(style.pmStyleProperty === cssStyleEnum.url) return;
    let styleTag: string = `${style.styleTag}:${style.value}`;
    if(style.pmStyleProperty === cssStyleEnum.height || style.pmStyleProperty === cssStyleEnum.width || style.pmStyleProperty === cssStyleEnum.top || style.pmStyleProperty === cssStyleEnum.left){
      if(!isNaN(parseInt(style.value))) styleTag += 'px';
    }
    styleTag += ';'
    return styleTag;
    }




createPageLayout(pageLayout: ILayout){
  this.cssContent += this.getCssClass(pageLayout);
  pageLayout.children.forEach(layout => {
    console.log('%c⧭ layout=', 'color: #ffcc00', layout);

    this.createPageLayout(layout);
  });
}

buildHtml(layout: ILayout, cssFileName: string):Promise<string> {
    let htmlBuilder: HtmlBuilder = new HtmlBuilder('Test Page');
    return new Promise((resolve, reject) => {
      htmlBuilder.buildHtml(layout ,cssFileName)
      .then(htmlContent => resolve(htmlContent))
      .catch(err => reject(err));
    });
  }


  private getHorizontalAlignment(value: string) {
    let horizontalAlignment: textHorizontalAlignment = parseInt(value);
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

  private getVerticalAlignment(value: string) {
    let verticalAlignment: textVerticalAlignment = parseInt(value);
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
