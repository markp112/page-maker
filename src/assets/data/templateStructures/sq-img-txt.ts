import { TemplateCss,ICss, cssTagTypes } from 'src/app/models/classes/templateCss';


let template: ICss = {
  css: `display: grid;
  grid-template-columns: 6fr 6fr;
  grid-template-rows: 1.5fr 0.25fr 5fr;
  grid-template-areas:  ". ."
                    "toolbar toolbar"
                    "image-area text-area";`,
  tagType:cssTagTypes.Class,
  cssTagName:'layout'
}

export class sqImgTxt {

  layout = new TemplateCss(template);
  textArea: TemplateCss;
  imageArea: TemplateCss;


}
