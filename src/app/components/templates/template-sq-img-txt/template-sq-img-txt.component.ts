import { Component, OnInit, Input, ɵConsole } from "@angular/core";
import { templateInitial } from "src/assets/data/mock/template-toolbar";
// data
import {
  textEditorButtonsGrp1,
  textEditorButtonsGrp2,
  textEditorButtonsGrp3,
  textEditorButtonsGrp4
} from "src/assets/data/mock/text-input-toolbar";
import {
  imgEditButtons,
  imgPositionButtons,
  imgSizeButtons
} from "src/assets/data/mock/image-toolbar";
// interface intialisers
import { initTextStylesInitial } from "../../../../assets/data/interface-initialisers/textInitial";
import { initImageStylesInitial } from "../../../../assets/data/interface-initialisers/imageInitial";
import { initSqImgTxtPage } from "../../../../assets/data/interface-initialisers/page-square-image-text-initial";
// import { pageMasterInitial } from '../../../../assets/data/interface-initialisers/pageMasterInitial';
// interfaces
// import { IImage } from "src/app/models/interfaces/image";
// import { IText } from "src/app/models/interfaces/text";
import { IStatusMessage, messageTypes } from "../../../models/interfaces/status-message";
import { IPage, pageTemplates } from "../../../models/interfaces/page";
import { IIconButton } from "src/app/models/interfaces/icon-button-interface";
// import { IPageMaster } from '../../../models/interfaces/pageMaster';
import { PageAreaTypes } from '../../../models/enums/pageAreaTypes.enum';
import { pageLayoutTypes } from 'src/app/models/enums/pageLayouts.enum';
import { IPageAreas } from 'src/app/models/interfaces/pageAreas-interface';
// services
import { PageTemplateService } from "../../../shared/page-template.service";
import { FontsService } from "../../../shared/fonts.service";
import { PageBuilderService } from "../../../shared/page-builder.service";
import { ILayout } from 'src/app/models/interfaces/layout';
// import { HtmlTags } from 'src/app/models/enums/htmlTags';
import { initMasterPageLayout, initLayoutSquareImgTxtText, initLayoutSquareImgTxtImageParent, initLayoutSquareImgTxtImageChild } from 'src/assets/data/interface-initialisers/layout-square-image-text-Initial';
import { ICssStyles } from 'src/app/models/interfaces/cssStyle';
import { config } from 'src/assets/data/config.ts/config';

@Component({
  selector: "app-template-sq-img-txt",
  templateUrl: "./template-sq-img-txt.component.html",
  styleUrls: ["./template-sq-img-txt.component.scss"]
})
export class TemplateSqImgTxtComponent implements OnInit {
  @Input() contentText: string;

  constructor(
    private pageService: PageTemplateService,
    private fontService: FontsService,
    private pageBuilder: PageBuilderService
  ) { }

  ngOnInit() {
    this.pageMaster = initSqImgTxtPage();
    this.pageMasterLayout = initMasterPageLayout();
    this.layoutText = initLayoutSquareImgTxtText();
    this.layoutImageParent = initLayoutSquareImgTxtImageParent();
    this.layoutImageChild = initLayoutSquareImgTxtImageChild();
    this.imageStyles = initImageStylesInitial();
    this.textStyles = initTextStylesInitial();
    this.fontColor = this.getStyleValue(initTextStylesInitial(), "color");
    this.fontBackgroundColor = this.getStyleValue(initTextStylesInitial(), "backgroundColor");
    this.fontFamily = this.getStyleValue(initTextStylesInitial(), "font");
    this.fontSize = this.getStyleValue(initTextStylesInitial(), "size");
    this.fontHorizontalAlignment
    this.fontVerticalAlignment
    this.imageBackGroundColor  = this.getStyleValue(initImageStylesInitial(), "backgroundColor");
    this.imageUrl = this.getStyleValue(initImageStylesInitial(), "url");
    this.imageTop = this.getStyleValue(initImageStylesInitial(),"top");
    this.imageLeft = this.getStyleValue(initImageStylesInitial(),"left");
    this.imageHeight = this.getStyleValue(initImageStylesInitial(),"height");
    this.imageWidth = this.getStyleValue(initImageStylesInitial(),"width");

  }


  // buttons for toolbar
  nonEditButtons: IIconButton[] = templateInitial;
  imgEditButtons: IIconButton[] = imgEditButtons;
  imgPositionButtons: IIconButton[] = imgPositionButtons;
  imgSizeButtons: IIconButton[] = imgSizeButtons;
  // buttons for text toolbar
  textEditButtonsGrp1: IIconButton[] = textEditorButtonsGrp1;
  textEditButtonsGrp2: IIconButton[] = textEditorButtonsGrp2;
  textEditButtonsGrp3: IIconButton[] = textEditorButtonsGrp3;
  textEditButtonsGrp4: IIconButton[] = textEditorButtonsGrp4;
  // boolean flags for managing state
  isEditing: boolean = false;
  showTextEditor: boolean = false;
  isShowFontPicker: boolean = false;
  isShowColourPicker: boolean = false;
  isEditingColor: boolean = false;
  isEditingBackgroundColor: boolean = false;
  isShowStatus: boolean = false;
  showUploadImage: boolean = false;
  showURLLink: boolean = false;
  isEditingImageBackgroundColor: boolean = false;
  statusMessage: IStatusMessage = {
    message: "",
    messageType: messageTypes.warning
  };

  pageMaster: IPage;
  pageMasterLayout: ILayout;
  layoutText: ILayout;
  layoutImageParent: ILayout;
  layoutImageChild: ILayout;
  //variables linked to the image
  imageStyles: ICssStyles[];
  textStyles: ICssStyles[];
  textStylesArray: ICssStyles[]; // directive  is bound to this array
  path: string = config.imageFilePath;
  clickevent: string;           // holds the value of the button that has been clicked
  isDirty: boolean = false;
  fontFamily: ICssStyles;
  fontSize: ICssStyles;
  fontColor: ICssStyles;
  fontBackgroundColor: ICssStyles;
  fontVerticalAlignment: ICssStyles;
  fontHorizontalAlignment: ICssStyles;
  imageBackGroundColor:  ICssStyles;
  imageUrl: ICssStyles;
  imageTop: ICssStyles;
  imageLeft: ICssStyles;
  imageHeight: ICssStyles;
  imageWidth: ICssStyles;


  handleClick(event) {
    this.isDirty = true;
    switch (event) {
      case "editClicked":
        this.setEdit();
        break;
      case "increaseFont":
        this.fontSize.value = (parseInt(this.fontSize.value) + 1).toString();
        break;
      case "decreaseFont":
        this.fontSize.value = (parseInt(this.fontSize.value) - 1).toString();
        break;
      case "font":
        this.isShowFontPicker = !this.isShowFontPicker;
        break;
      case "fontColor":
        this.isShowColourPicker = !this.isShowColourPicker;
        this.isEditingColor = !this.isEditingColor;
        break;
      case "backgroundColor":
        this.isShowColourPicker = !this.isShowColourPicker;
        this.isEditingBackgroundColor = !this.isEditingBackgroundColor;
        break;
      case "uploadClicked":
        this.imageUrl.value = "";
        this.showUploadImage = !this.showUploadImage;
        break;
      case "imageBackgroundColor":
        this.isShowColourPicker = !this.isShowColourPicker;
        this.isEditingImageBackgroundColor = !this.isEditingImageBackgroundColor;
        break;
      case "imgDecreaseSize":
        this.imageHeight.value = (parseInt(this.imageHeight.value) - 1).toString();
        this.imageWidth.value = (parseInt(this.imageWidth.value) - 1).toString();
        break;
      case "imgIncreaseSize":
        this.imageWidth.value = (parseInt(this.imageWidth.value) + 1).toString();
        this.imageHeight.value = (parseInt(this.imageHeight.value) + 1).toString();
        break;
      case "imgLeft":
        this.imageLeft.value = (parseInt(this.imageLeft.value) - 1).toString();
        break;
      case "imgRight":
        this.imageLeft.value = (parseInt(this.imageLeft.value) + 1).toString();
        break;
      case "imgUp":
        this.imageTop.value = (parseInt(this.imageTop.value) + 1).toString();
        break;
      case "imgDown":
        this.imageTop.value = (parseInt(this.imageTop.value) - 1).toString();
        break;
      case "urlClicked":
        this.showURLLink = true;
      case "saveClicked":
        this.savePage();
        break;
      case "getClicked":
        this.getTemplate();
        break;
      case "publishClicked":
        this.publish();
        break;
      default:
        this.clickevent = event;
        if(event != undefined){
          if(event.charAt(0) === "H"){
            this.fontHorizontalAlignment.value = event.charAt(2);
          }
          if(event.charAt(0) === "V"){
            this.fontVerticalAlignment.value = event.charAt(2);
          }
      }
    }
  }

  //event handlers
  closeTextInput() {
    this.showTextEditor = false;
  }

  textChanged(content: string) {
    this.layoutText.content = content;
  }

  handleSelectFont(font: string) {
    this.isShowFontPicker = false;
    this.fontFamily.value = font;
  }

  setEdit() {
    if (!this.isShowColourPicker) {
      this.isEditing = !this.isEditing;
    }
  }

  getStyleValue(stylesArray: ICssStyles[], styleTofind:string): ICssStyles {
    return stylesArray.filter(style => style.pmStyleProperty === styleTofind)[0];
  }


  setColor(color: string) {
    if (this.isEditingColor) {
      this.fontColor.value = color;
      this.isEditingColor = !this.isEditingColor;
    }
    if (this.isEditingBackgroundColor) {
      this.fontBackgroundColor.value = color;
      this.isEditingBackgroundColor = !this.isEditingBackgroundColor;
    }
    if (this.isEditingImageBackgroundColor) {
      this.imageBackGroundColor.value = color;
      this.isEditingImageBackgroundColor = !this.isEditingImageBackgroundColor;
    }
    this.isShowColourPicker = !this.isShowColourPicker;
  }

  handleFileUploaded(url: string) {
    this.showUploadImage = !this.showUploadImage;
    this.imageUrl.value = url;
  }

  handleUrl(url: string) {
    this.showURLLink = !this.showURLLink;
    this.imageUrl.value = url;
  }

  displayStatusMessage(message: string, messageType: messageTypes) {
    this.statusMessage.message = message;
    this.statusMessage.messageType = messageType;
    this.isShowStatus = true;
    setTimeout(() => { this.isShowStatus = false; alert('timeout expired'); }, 3000);
  }

  buildStyleArrayText(): ICssStyles[] {
    let styles: ICssStyles[] = [];
    styles.push(this.fontColor);
    styles.push(this.fontBackgroundColor);
    styles.push(this.fontFamily);
    styles.push(this.fontSize);
    styles.push(this.fontVerticalAlignment);
    styles.push(this.fontHorizontalAlignment);
    return styles;
  }

  buildStyleArrayImage(): ICssStyles[]{
    let styles: ICssStyles[] = [];
    styles.push(this.imageHeight);
    styles.push(this.imageWidth);
    styles.push(this.imageLeft);
    styles.push(this.imageTop);
    styles.push(this.imageUrl);
    return styles;

  }

  assemblePage(): ILayout {

    this.layoutText.styles = this.buildStyleArrayText();
    this.pageMasterLayout.children.push(this.layoutText);
    this.layoutImageParent.styles.push(this.imageBackGroundColor)
    this.layoutImageChild.styles = this.buildStyleArrayImage();
    this.layoutImageParent.children.push(this.layoutImageChild);
    this.pageMasterLayout.children.push(this.layoutImageParent);
    return this.pageMasterLayout;
  }

  savePage() {
    if (this.pageMaster.uid != "") {
      this.updateRecord();
    } else this.createRecord();
  }

  createRecord() {
    this.pageMaster = {
      uid: "",
      pageRef: "12",
      pageName: "page 1",
      template: pageTemplates.sqImgText,
      layout: this.assemblePage()
    };
    this.pageService.addRecord(this.pageMaster)
      .then(result => {
        if (result.result) {
          this.isDirty = false;
          this.pageMaster.id = result.msg;
          this.displayStatusMessage("Content saved", messageTypes.information);
        } else {
          this.displayStatusMessage(`Error: ${result.message}`, messageTypes.warning);
        }
      })
      .catch(err => {
        this.displayStatusMessage(`Error: ${err.message}`, messageTypes.error);
      });
  }

  // update the record in fireBase
  updateRecord() {
    this.pageMaster.layout = this.assemblePage();
    this.pageService.updateRecord(this.pageMaster)
      .then(res => {
        this.displayStatusMessage("Record Updated", messageTypes.information);
      })
      .catch(err => {
        console.log(err)
        this.displayStatusMessage(err.message, messageTypes.error)
      });
  }

  getTemplate() {
    this.pageService.getRecord(pageTemplates.sqImgText).subscribe(result => {
      let page = result[0];
      console.log("TCL: TemplateSqImgTxtComponent -> getTemplate -> page", page)
      this.fontService.getFontNames();
      // this.imageStyles = page.imageAreas[0];

      // console.log("TCL: TemplateSqImgTxtComponent -> getTemplate -> page.imageAreas[0]", page.imageAreas[0])
      // this.layoutText.textStyles = page.textAreas[0];
      // this.page = page;
    });
  }

  publish() {
    // console.log("Ipage=", this.pageMaster, "pageTemplate=", this.pageTemplate);
    // this.pageTemplate.children = [];
    // this.pageTemplate.children.push(this.layoutText);
    // this.pageTemplate.children.push(this.layoutImage);
    // this.pageBuilder.createPage(this.page, this.pageTemplate)
    // .then(result => {
    //   this.statusMessage = result;
    //   this.isShowStatus = true;

    // })
  }
}
