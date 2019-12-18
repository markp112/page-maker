import { Injectable } from "@angular/core";
import { ImageFormatterService } from "../../formatters/image-formatter/image-formatter.service";
import { TextDirectiveFormatterService } from "../../formatters/text/text-directive-formatter.service";
import { IPage, pageTemplates } from "src/app/models/interfaces/page";
import { ILayout } from "src/app/models/interfaces/layout";
import { PageAreaTypesEnum } from "src/app/models/enums/pageAreaTypes.enum";
import { HtmlTagsEnum } from "src/app/models/enums/htmlTags";
import { cssStyleTagTypesEnum } from "src/app/models/enums/css-style-tag-types-enum";
import { ICssStyles } from "src/app/models/interfaces/cssStyle";
import { cssStyleEnum } from "src/app/models/enums/cssStylesEnum";
import { FirebasePageTemplateService } from '../../firebasePageTemplate.service';

@Injectable({
  providedIn: "root"
})
export class SqImgTxtTemplateService {
  constructor(
    private imageStyles: ImageFormatterService,
    private textStyles: TextDirectiveFormatterService,
    private cloudStorageService: FirebasePageTemplateService
  ) {
    this.pageMaster = {
      uid: "",
      pageRef: "12",
      pageName: "page 1",
      template: pageTemplates.sqImgText,
      layout: null
    };
  }
  pageMaster: IPage;

  private constructTheLayoutForThePage(): ILayout {
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
    return layout;
  }

  private constructTheLayoutForThePageElements(): ILayout {
    let layout: ILayout = {
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
    return layout;
  }

  private constructTheLayoutForTheTextElement(): ILayout {
    const layout: ILayout = {
      layoutType: PageAreaTypesEnum.textArea,
      cssClass: `grid-area: text-area;
              width: 500px;
              height: 400px;
              padding: 10px;
              display: flex;
              flex-direction: column;`,
      htmlTag: HtmlTagsEnum.div,
      styleTagType: cssStyleTagTypesEnum.elementTag,
      content: "",
      className: `text-area`,
      styles: [] = this.initialiseTextStyles(),
      children: []
    };
    return layout;
  }

  private buildAStyleTag(
    styleTag: string,
    styleProperty: cssStyleEnum,
    value: string
  ): ICssStyles {
    let aStyle: ICssStyles = {
      styleTag: styleTag,
      pmStyleProperty: styleProperty,
      value: value
    };
    return aStyle;
  }

  private constructTheImageParentElement = (): ILayout => {
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
      className: `image-area`,
      styles: [],
      children: []
    };
    let backgroundColor: ICssStyles = this.buildAStyleTag(
      "background-color",
      cssStyleEnum.backgroundColor,
      "rgba(241,242,244,1)"
    );
    layoutSqImgImage.styles.push(backgroundColor);
    return layoutSqImgImage;
  };

  private addStylesToLayOut(theLayoutElement: ILayout, theStyles: ICssStyles[]){
    theStyles.forEach(aStyle => {
      theLayoutElement.styles.push(aStyle);
    })
  }

  private constructTheImageElement = () => {
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
      className: "",
      styles: [] = this.initialiseImageStyles(),
      content: "",
      children: []
    };
    return imageLayout;
  };

  private initialiseTextStyles = (): ICssStyles[] => {
    let textElements: ICssStyles[] = [];
    let color: ICssStyles = this.buildAStyleTag(
      "color",
      cssStyleEnum.color,
      "rgba(242,226,213, 1)"
    );
    let fontSize: ICssStyles = this.buildAStyleTag(
      "font-size",
      cssStyleEnum.fontSize,
      "16"
    );
    let fontFamily: ICssStyles = this.buildAStyleTag(
      "font-family",
      cssStyleEnum.fontFamily,
      "Monterra"
    );
    let backgroundColor: ICssStyles = this.buildAStyleTag(
      "background-color",
      cssStyleEnum.backgroundColor,
      "rgba(38,1,89, 1)"
    );
    let horizontalAlign: ICssStyles = this.buildAStyleTag(
      "text-align",
      cssStyleEnum.horizontalAlignment,
      "textHorizontalAlignment.alignLeft"
    );
    let vertcalAlign: ICssStyles = this.buildAStyleTag(
      "justify-content",
      cssStyleEnum.verticalAlignment,
      "textVerticalAlignment.alignTop"
    );
    textElements.push(fontFamily);
    textElements.push(fontSize);
    textElements.push(color);
    textElements.push(backgroundColor);
    textElements.push(horizontalAlign);
    textElements.push(vertcalAlign);
    return textElements;
  };

  private initialiseImageStyles = (): ICssStyles[] => {
    let styles: ICssStyles[] = [];
    let backgroundColor: ICssStyles = this.buildAStyleTag(
      "background-color",
      cssStyleEnum.backgroundColor,
      "rgba(241,242,244,1)"
    );
    let url: ICssStyles = this.buildAStyleTag(
      "src",
      cssStyleEnum.url,
      "../../../../assets/images/placeholder-image.png"
    );
    let height: ICssStyles = this.buildAStyleTag(
      "height",
      cssStyleEnum.height,
      "438"
    );
    let width: ICssStyles = this.buildAStyleTag(
      "width",
      cssStyleEnum.width,
      "650"
    );
    let top: ICssStyles = this.buildAStyleTag("top", cssStyleEnum.top, "0");
    let left: ICssStyles = this.buildAStyleTag("left", cssStyleEnum.left, "0");
    styles.push(height);
    styles.push(width);
    styles.push(top);
    styles.push(left);
    styles.push(backgroundColor);
    styles.push(url);
    return styles;
  };

  private constructThePageAndAllItsElements(): ILayout{
    let theImageLayout = this.buildTheImageLayoutStructure();
    let theTextLayout = this.buildTheTextLayoutStructure();
    let theLayoutForThePageElements = this.constructTheLayoutForThePageElements();
    theLayoutForThePageElements.children.push(theImageLayout);
    theLayoutForThePageElements.children.push(theTextLayout);
    let theLayoutForThePage = this.constructTheLayoutForThePage();
    theLayoutForThePage.children.push(theLayoutForThePageElements);
    return theLayoutForThePage;
  }

  public createNewRecord(): Promise<any> {
    let theWholePageLayout = this.constructThePageAndAllItsElements();
    this.pageMaster.layout = theWholePageLayout;
    return new Promise((resolve, reject)=>{
      this.cloudStorageService.addRecord(this.pageMaster)
      .then(result =>  resolve(result))
      .catch(err => reject(err));
    })
  }

  buildTheImageLayoutStructure(): ILayout {
    let theImage: ILayout = this.constructTheImageParentElement();
    theImage.styles.push(this.imageStyles.getASingleStyle(cssStyleEnum.backgroundColor));
    let theImageElement = this.constructTheImageElement();
    this.addStylesToLayOut(theImageElement, this.imageStyles.getAllImageStyles());
    theImageElement.children.push(theImageElement);
    return theImage;
  }
  buildTheTextLayoutStructure(): ILayout {
    let theTextElement: ILayout  = this.constructTheLayoutForTheTextElement();
    this.addStylesToLayOut(theTextElement,this.textStyles.getAllTextStyles());
    return theTextElement;
  }
}
