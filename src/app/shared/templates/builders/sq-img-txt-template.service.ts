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
import { TextContentService } from '../../text-content/text-content.service';
import { AuthService } from '../../auth.service';



@Injectable({
  providedIn: "root"
})
export class SqImgTxtTemplateService {
  constructor(
    private auth: AuthService,
    private imageStyles: ImageFormatterService,
    private textStyles: TextDirectiveFormatterService,
    private theTextContent: TextContentService,
    private _CloudDatabaseService: FirebasePageTemplateService
  ) {
    this.pageMaster = {
      id: "",
      uid: this.auth.getUserID(),
      pageRef: "12",
      pageName: "page 1",
      template: pageTemplates.sqImgText,
      layout: null
    };
  }

  pageMaster: IPage;

  public get pageId(): string {
    console.log("pageId-->",this.pageMaster.id)
    console.log('%c⧭', 'color: #e50000', this.pageMaster);
    return this.pageMaster.id;

  }

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
      styles: [],
      children: []
    };
    return layout;
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

    return layoutSqImgImage;
  };

  private addStylesToLayOut(theLayoutElement: ILayout, theStyles: ICssStyles[]) {
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
      styles: [],
      content: "",
      children: []
    };
    return imageLayout;
  };


  private constructThePageAndAllItsElements(): ILayout {
    let theImageLayout = this.buildTheImageLayoutStructure();
    let theTextLayout = this.buildTheTextLayoutStructure();
    let theLayoutForThePageElements = this.constructTheLayoutForThePageElements();
    theLayoutForThePageElements.children.push(theImageLayout);
    theLayoutForThePageElements.children.push(theTextLayout);
    let theLayoutForThePage = this.constructTheLayoutForThePage();
    theLayoutForThePage.children.push(theLayoutForThePageElements);
    return theLayoutForThePage;

  }


  private buildTheImageLayoutStructure(): ILayout {
    let theImage: ILayout = this.constructTheImageParentElement();
    theImage.styles.push(this.imageStyles.getASingleStyle(cssStyleEnum.backgroundColor));
    let theImageElement = this.constructTheImageElement();
    this.addStylesToLayOut(theImageElement, this.imageStyles.getAllImageStyles());
    theImage.children.push(theImageElement);
    return theImage;
  }

  private buildTheTextLayoutStructure(): ILayout {
    let theTextElement: ILayout = this.constructTheLayoutForTheTextElement();
    this.addStylesToLayOut(theTextElement, this.textStyles.getAllTextStyles());
    theTextElement.content = this.theTextContent.textContent;
    return theTextElement;
  }

  private extractTheLayoutsFromThePage(theLayouts: ILayout[]): void {
    theLayouts.forEach(theLayout => {
      switch (theLayout.layoutType) {
        case PageAreaTypesEnum.imageArea:
          console.log("Processing Image")
          this.imageStyles.createStylesFromData(theLayout.styles);
          break;
        case PageAreaTypesEnum.textArea:
          console.log("Processing Text")
          this.textStyles.createStylesFromData(theLayout.styles);
          if (theLayout.content !== "") this.theTextContent.textContent = theLayout.content;
          break;
      }
      if (theLayout.children.length > 0) this.extractTheLayoutsFromThePage(theLayout.children)

    });
  }

  private getTheReturnedDataIntoTheDirectiveServices(thePageLayoutData: IPage): void {
    console.log("thePageLayoutData", thePageLayoutData)
    this.extractTheLayoutsFromThePage(thePageLayoutData.layout.children)
  }

  public createNewRecord(): Promise<any> {
    let theWholePageLayout = this.constructThePageAndAllItsElements();
    this.pageMaster.layout = theWholePageLayout;
    return new Promise((resolve, reject) => {
      this._CloudDatabaseService.addRecord(this.pageMaster)
        .then(result => {
          this.pageMaster.id = result.msg;
          resolve(result)
        })
        .catch(err => reject(err));
    })
  }

  public updateRecord(): Promise<any>{
    console.log("Update Record")
    let theWholePageLayout = this.constructThePageAndAllItsElements();
    this.pageMaster.layout = theWholePageLayout;
    console.log('%c⧭', 'color: #00e600', this.pageMaster);

    return new Promise((resolve, reject) => {
      this._CloudDatabaseService.updateRecord(this.pageMaster)
        .then(result => {
          resolve(result);
        })
        .catch(err => reject(err));
    })
  }

  public getThePage(): Promise<any> {
    return new Promise((resolve) => {
      this._CloudDatabaseService.getRecord(pageTemplates.sqImgText).subscribe(result => {
        let thePageLayoutData: IPage = result[0];
        console.log('%c⧭', 'color: #aa00ff', thePageLayoutData);
        this.getTheReturnedDataIntoTheDirectiveServices(thePageLayoutData);
        resolve();
      })
    }

    )
  }
}
