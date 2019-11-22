import { ILayout, ITextLayout, IImageLayout } from "src/app/models/interfaces/layout";
import { HtmlTags } from "src/app/models/enums/htmlTags";
import { ICssStyles } from 'src/app/models/interfaces/cssStyle';
import { initImageStylesInitial } from 'src/assets/data/interface-initialisers/imageInitial';
import { initTextStyles } from 'src/assets/data/interface-initialisers/textInitial';

export const layoutInitial: ILayout = {
  htmlTag: HtmlTags.section,
  cssClass: `display: grid;
        grid-template-columns: 6fr 6fr;
        grid-template-rows: 1.5fr 0.25fr 5fr;
        grid-template-areas:  ". ."
                              "toolbar toolbar"
                              "image-area text-area";
      `,
  className: `template-sq-img-txt`,
  styles: [],
  children: []
};

///layout elements for text
const initLayoutSqImgText = (): ILayout => {

  const layoutSqImgText: ILayout = {
    cssClass: `grid-area: text-area;
              width: 500px;
              height: 400px;
              padding: 10px;
              display: flex;
              flex-direction: column;`,
    htmlTag: HtmlTags.div,
    className: `text-area`,
    styles: [] = initTextStyles(),
    children: [],
  };
  return layoutSqImgText;
}

// parent wrapper for image
const initLayoutSqImgImage = (): ILayout => {
  const layoutSqImgImage: ILayout = {
    cssClass: ` grid-area: image-area;
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: center;
                position: relative;
                overflow: hidden;`,
    htmlTag: HtmlTags.div,
    content: "",
    className:`image-area`,
    styles: [],
    children:[]
  };
  let backgroundColor: ICssStyles = { styleTag: "background-color", pmStyleProperty: "backgroundColor", value:"rgba(241,242,244,1)" };
  layoutSqImgImage.styles.push(backgroundColor);

  // initial data for the image element
  let imageLayout: ILayout = {
    cssClass: `img {
        display: block;
        max-width: 500px;
        max-height: 400px;
        width: width;
        height: auto;
        object-fit: contain;
        position: absolute;
        top: 0;
        left: 0;`,
    htmlTag: HtmlTags.img,
    className: '',
    styles: [] = initImageStylesInitial(),
    content:"",
    children: [],
    
  }
  layoutSqImgImage.children.push(imageLayout);
  return layoutSqImgImage;
}

export {
  initLayoutSqImgText,
  initLayoutSqImgImage
}
