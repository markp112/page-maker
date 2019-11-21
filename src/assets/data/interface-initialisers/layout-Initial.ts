import { ILayout, ITextLayout, IImageLayout } from "src/app/models/interfaces/layout";
import { HtmlTags } from "src/app/models/enums/htmlTags";
import { ICssStyles } from 'src/app/models/interfaces/cssStyle';
import { imageInitial } from 'src/assets/data/interface-initialisers/imageInitial';
import { textInitial } from 'src/assets/data/interface-initialisers/textInitial';

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
const initLayoutSqImgText = (): ITextLayout => {

  const layoutSqImgText: ITextLayout = {
    cssClass: `grid-area: text-area;
              width: 500px;
              height: 400px;
              padding: 10px;
              display: flex;
              flex-direction: column;`,
    htmlTag: HtmlTags.div,
    className: `text-area`,
    styles: [],
    children: [],
    textStyles: textInitial
  };
  let color: ICssStyles = { styleTag: "color", pmStyleProperty: "color", value:"" };
  let fontSize: ICssStyles = { styleTag: "font-size", pmStyleProperty: "size", value:"" }
  let fontFamily: ICssStyles = { styleTag: "font-family", pmStyleProperty: "font", value:"" };
  let backgroundColor: ICssStyles = { styleTag: "background-color", pmStyleProperty: "backgroundColor", value:"" };
  let horizontalAlign: ICssStyles = { styleTag: "text-align", pmStyleProperty: "horizontalAlignment", value:"" };
  let vertcalAlign: ICssStyles = { styleTag: "justify-content", pmStyleProperty: "verticalAlignment", value:"" };

  layoutSqImgText.styles.push(color);
  layoutSqImgText.styles.push(fontSize);
  layoutSqImgText.styles.push(fontFamily);
  layoutSqImgText.styles.push(backgroundColor);
  layoutSqImgText.styles.push(horizontalAlign);
  layoutSqImgText.styles.push(vertcalAlign);

  return layoutSqImgText;
}
// parent wrapper for image
const initLayoutSqImgImage = (): IImageLayout => {
  const layoutSqImgImage: IImageLayout = {
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
    className:`image-area`,
    imageStyles:imageInitial,
    styles: [],
    children: []
  };
  let backgroundColor: ICssStyles = { styleTag: "background-color", pmStyleProperty: "backgroundColor", value:"" };
  layoutSqImgImage.styles.push(backgroundColor);

  // initial data for the image element
  let imageLayout: IImageLayout = {
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
    styles: [],
    children: [],
    imageStyles: imageInitial
  }

  let height: ICssStyles = { styleTag: "height", pmStyleProperty: "height", value:"" };
  let width: ICssStyles = { styleTag: "width", pmStyleProperty: "width", value:"" }
  let top: ICssStyles = { styleTag: "top", pmStyleProperty: "top", value: "" };
  let left: ICssStyles = { styleTag: "left", pmStyleProperty: "left", value:"" };
  imageLayout.styles.push(height);
  imageLayout.styles.push(width);
  imageLayout.styles.push(top);
  imageLayout.styles.push(left);
  layoutSqImgImage.children.push(imageLayout);
  return layoutSqImgImage;
}

export {
  initLayoutSqImgText,
  initLayoutSqImgImage
}
