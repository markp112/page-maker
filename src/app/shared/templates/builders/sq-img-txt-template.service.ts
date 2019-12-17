import { Injectable } from '@angular/core';
import { ImageFormatterService } from '../../formatters/image-formatter/image-formatter.service';
import { TextDirectiveFormatterService } from '../../formatters/text/text-directive-formatter.service';
import { IPage, pageTemplates } from 'src/app/models/interfaces/page';
import { ILayout } from 'src/app/models/interfaces/layout';
import { PageAreaTypesEnum } from 'src/app/models/enums/pageAreaTypes.enum';
import { HtmlTagsEnum } from 'src/app/models/enums/htmlTags';
import { cssStyleTagTypesEnum } from 'src/app/models/enums/css-style-tag-types-enum';
import { initTextStylesInitial } from 'src/assets/data/interface-initialisers/textInitial';
import { ICssStyles } from 'src/app/models/interfaces/cssStyle';
import { cssStyleEnum } from 'src/app/models/enums/cssStylesEnum';

@Injectable({
  providedIn: "root"
})
export class SqImgTxtTemplateService {
  constructor(
    imageStyles: ImageFormatterService,
    textStyles: TextDirectiveFormatterService
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
      styles: [] = initTextStylesInitial(),
      children: []
    };
    return layout;
  }
  private buildAStyleTag(styleTag: string, styleProperty: cssStyleEnum, value: string): ICssStyles {
    let aStyle: ICssStyles = {
      styleTag: styleTag,
      pmStyleProperty: styleProperty,
      value: value
    };
    return aStyle;
  }

  private initTextStylesInitial = (): ICssStyles[] => {
    let textElements: ICssStyles[] = [];
    let color: ICssStyles = this.buildAStyleTag("color", cssStyleEnum.color, "rgba(242,226,213, 1)" );
    let fontSize: ICssStyles = this.buildAStyleTag("font-size", cssStyleEnum.fontSize, "16");
    let fontFamily: ICssStyles = this.buildAStyleTag("font-family", cssStyleEnum.fontFamily,  "Monterra");
    let backgroundColor: ICssStyles = this.buildAStyleTag("background-color", cssStyleEnum.backgroundColor,"rgba(38,1,89, 1)");
    let horizontalAlign: ICssStyles = this.buildAStyleTag("text-align",cssStyleEnum.horizontalAlignment,"textHorizontalAlignment.alignLeft");
    let vertcalAlign: ICssStyles = this.buildAStyleTag("justify-content", cssStyleEnum.verticalAlignment,"textVerticalAlignment.alignTop");
    textElements.push(fontFamily);
    textElements.push(fontSize);
    textElements.push(color);
    textElements.push(backgroundColor);
    textElements.push(horizontalAlign);
    textElements.push(vertcalAlign);
    return textElements;
  };

  public createNewRecord() {
    this.buildTheImageLayoutStructure();
    this.buildTheTextLayoutStructure();
  }
  buildTheImageLayoutStructure() {
    throw new Error("Method not implemented.");
  }
  buildTheTextLayoutStructure() {
    throw new Error("Method not implemented.");
  }
}
