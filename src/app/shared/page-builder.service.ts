import { Injectable } from '@angular/core';
import { IPage } from '../models/interfaces/page';
import { IPageMaster } from '../models/interfaces/pageMaster';
import { pageLayoutTypes } from '../models/enums/pageLayouts.enum';
import { PageAreaTypes } from '../models/enums/pageAreaTypes.enum';

@Injectable({
  providedIn: 'root'
})
export class PageBuilderService {

  constructor() { }

  createPage(pageData: IPage, pageLayout: IPageMaster){

   let css: string = pageLayout.pageLayoutCss;
   let textCss:string= null;
    pageLayout.AreaNames.forEach(area =>{
      switch (area.areaType){
        case PageAreaTypes.textArea:
          let textCss = buildTextCss(pageData.textArea, area.areaName)
          break;
        case  PageAreaTypes.imageArea:
          break;
      }
    })

  }

  writeHTML(pageData: IPage, pageHtml: string, ) {


  }

  writeCSS(pageData: IPage, pageStyling:string[]){

  }

}
