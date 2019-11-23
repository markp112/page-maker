import { IPage, pageTemplates } from 'src/app/models/interfaces/page';

export const initSqImgTxtPage =() => {
  let page: IPage = {
    uid: "",
    pageRef:"",
    pageName:"",
    template:pageTemplates.sqImgText,
    layout: null
  }

  return page;
}
