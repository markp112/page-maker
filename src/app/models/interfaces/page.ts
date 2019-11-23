// import { IText } from './text';
// import { IImage } from './image'
import { ILayout } from './layout';

export enum pageTemplates {
  sqImgText,
}

export interface IPage {
  uid: string // id of user who created this page
  id?: string // id will be present once the record has been saved
  siteId?: string // id of site this page is part of (not used at present for future use)
  pageRef: string     // unique ID of this page
  pageName: string,   // the name of the page as in home about etc
  template: pageTemplates,  // what template has this page been built on
  // textAreas: IText[], //stores the formating and content for each text area element
  // imageAreas: IImage[] // stores the formatting and content for each page area element
  layout: ILayout,
}
