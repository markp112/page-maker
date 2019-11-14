import { Injectable } from '@angular/core';
import { IPage } from '../models/interfaces/page';

@Injectable({
  providedIn: 'root'
})
export class PageBuilderService {

  constructor() { }

  createPage(pageData: IPage, pageStyling:string[], pageHtml:string){
    this.writeHTML(pageData, pageHtml);
    this.writeCSS(pageData, pageStyling);
  }

  writeHTML(pageData: IPage, pageHtml: string) {

  }

  writeCSS(pageData: IPage, pageStyling:string[]){
    
  }

}
