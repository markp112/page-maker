import { ILayout } from "src/app/models/interfaces/layout";
import { HtmlTagsEnum } from "src/app/models/enums/htmlTags";
import { ICssStyles } from 'src/app/models/interfaces/cssStyle';
import { initImageStylesInitial } from 'src/assets/data/interface-initialisers/imageInitial';
import { initTextStylesInitial } from 'src/assets/data/interface-initialisers/textInitial';
import { PageAreaTypesEnum } from 'src/app/models/enums/pageAreaTypes.enum';
import { cssStyleEnum } from 'src/app/models/enums/cssStylesEnum';
import { cssStyleTagTypesEnum } from 'src/app/models/enums/css-style-tag-types-enum';

const initMasterPageLayout = () => {
    let layout: ILayout = {
      layoutType: PageAreaTypesEnum.masterPageTemplate,
      htmlTag: HtmlTagsEnum.section,
      styleTagType: cssStyleTagTypesEnum.elementTag,
      content: ``,
      cssClass: `width: 100vw;
                  height: 500px;
                  display: flex;
                  flex-direction: row;
                  justify-content: center;`,
      className: `template`,
      styles: [],
      children: []
    };

    let subPageLayout: ILayout = {
    layoutType: PageAreaTypesEnum.masterPageTemplate,
    htmlTag: HtmlTagsEnum.div,
    cssClass: `display: grid;
          grid-template-columns:2fr 6fr 6fr 2fr;
          grid-template-rows: 1.5fr 0.5fr 5fr;
          grid-template-areas:  ". . . ."
                                ". toolbar toolbar ."
                                ". image-area text-area .";
        `,
    className: `template-sq-img-txt`,
    styleTagType: cssStyleTagTypesEnum.elementTag, // is this a css class or a standard html element being styled
    content: "",
    styles: [],
    children: []
  };
  layout.children.push(subPageLayout);
  return layout;
}

///layout elements for text
const initLayoutSquareImgTxtText = (): ILayout => {

  const layoutSqImgText: ILayout = {
    layoutType: PageAreaTypesEnum.textArea,
    cssClass: `grid-area: text-area;
              width: 500px;
              height: 400px;
              padding: 10px;
              display: flex;
              flex-direction: column;`,
    htmlTag: HtmlTagsEnum.div,
    styleTagType: cssStyleTagTypesEnum.elementTag,
    content:"",
    className: `text-area`,
    styles: [] = initTextStylesInitial(),
    children: [],
  };
  return layoutSqImgText;
}

// parent wrapper for image
const initLayoutSquareImgTxtImageParent = (): ILayout => {
  const layoutSqImgImage: ILayout = {
    layoutType: PageAreaTypesEnum.imageArea,
    cssClass: ` grid-area: image-area;
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: center;
                position: relative;
                overflow: hidden;`,
    htmlTag: HtmlTagsEnum.div,
    styleTagType: cssStyleTagTypesEnum.elementTag,
    content: "",
    className:`image-area`,
    styles: [],
    children:[]
  };
  let backgroundColor: ICssStyles = { styleTag: "background-color", pmStyleProperty: cssStyleEnum.backgroundColor, value:"rgba(241,242,244,1)" };
  layoutSqImgImage.styles.push(backgroundColor);
  return layoutSqImgImage;
}
  // initial data for the image element#
  const initLayoutSquareImgTxtImageChild = () => {
  let imageLayout: ILayout = {
    layoutType: PageAreaTypesEnum.imageArea,
    cssClass: `img {
        display: block;
        max-width: 500px;
        max-height: 400px;
        object-fit: contain;
        position: absolute;`,
    htmlTag: HtmlTagsEnum.img,
    styleTagType: cssStyleTagTypesEnum.elementTag, // is this a css class or a standard html element being styled
    className: '',
    styles: [] = initImageStylesInitial(),
    content:"",
    children: [],

  }
    return imageLayout;
}

export {
  initMasterPageLayout,
  initLayoutSquareImgTxtText,
  initLayoutSquareImgTxtImageParent,
  initLayoutSquareImgTxtImageChild
}
