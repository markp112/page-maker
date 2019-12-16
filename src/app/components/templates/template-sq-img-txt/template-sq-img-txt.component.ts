import { Component, OnInit, Input } from "@angular/core";
import { templateInitial } from "src/assets/data/mock/template-toolbar";

// interface intialisers
// import { initImageStylesInitial } from "../../../../assets/data/interface-initialisers/imageInitial";
import { initSqImgTxtPage } from "../../../../assets/data/interface-initialisers/page-square-image-text-initial";
import { IStatusMessage, messageTypes } from "../../../models/interfaces/status-message";
import { IPage, pageTemplates } from "../../../models/interfaces/page";
import { IIconButton } from "src/app/models/interfaces/icon-button-interface";
import { PageAreaTypesEnum } from '../../../models/enums/pageAreaTypes.enum';

// services
import { PageTemplateService } from "../../../shared/page-template.service";
import { FontsService } from "../../../shared/fonts.service";
import { PageBuilderService } from "../../../shared/page-builder.service";
import { StylesGeneratorService } from '../../../shared/styles-generator-service/styles-generator.service'
import { ILayout } from 'src/app/models/interfaces/layout';
import { initMasterPageLayout, initLayoutSquareImgTxtText, initLayoutSquareImgTxtImageParent, initLayoutSquareImgTxtImageChild } from 'src/assets/data/interface-initialisers/layout-square-image-text-Initial';
import { ICssStyles } from 'src/app/models/interfaces/cssStyle';
import { cssStyleEnum } from 'src/app/models/enums/cssStylesEnum';
import { ToolBarBuilder } from 'src/app/models/classes/builders/text-tool-bar-builder/Tool-bar-builder';
import { ToolbarTypesEnum } from 'src/app/models/enums/toolbar-types-enum';
import { ButtonEventEnums } from 'src/app/models/enums/ButtonEventEnums';

import { IButtonEvent } from 'src/app/models/interfaces/button-event';
import { ButtonCommandTypesEnum } from 'src/app/models/enums/Button-Command-Type-enums';


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
    private pageBuilder: PageBuilderService,
  ) {}

  ngOnInit() {
    this.pageMaster = initSqImgTxtPage();
    this.pageMasterLayout = initMasterPageLayout();
    this.layoutText = initLayoutSquareImgTxtText();
    this.layoutImageParent = initLayoutSquareImgTxtImageParent();
    this.layoutImageChild = initLayoutSquareImgTxtImageChild();

    let builder = new ToolBarBuilder();

    this.textEditButtonsGrp1 = builder.build(ToolbarTypesEnum.TextAlignment);
    this.textEditButtonsGrp2 = builder.build(ToolbarTypesEnum.FontSettings);
    this.textEditButtonsGrp3 = builder.build(ToolbarTypesEnum.TextColourSettings);
    this.textEditButtonsGrp4 = builder.build(ToolbarTypesEnum.VerticalAlignment);

    this.imgEditButtons = builder.build(ToolbarTypesEnum.ImageCaptureButtons);
    this.imgPositionButtons = builder.build(ToolbarTypesEnum.ImagePositionButtons);
    this.imgSizeButtons = builder.build(ToolbarTypesEnum.ImageSizeButtons);

    this.nonEditButtons = builder.build(ToolbarTypesEnum.CommandToolbar);
  }

  // buttons for toolbar
  nonEditButtons: IIconButton[];
  imgEditButtons: IIconButton[];
  imgPositionButtons: IIconButton[];
  imgSizeButtons: IIconButton[];
  // buttons for text toolbar
  textEditButtonsGrp1: IIconButton[];
  textEditButtonsGrp2: IIconButton[];
  textEditButtonsGrp3: IIconButton[];
  textEditButtonsGrp4: IIconButton[];
  // boolean flags for managing state
  buttonEvent: ButtonEventEnums;
  changeValue: string = "";

  imageButtonEvent: ButtonEventEnums;
  imageChangedValue: string;
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
  clickevent: string; // holds the value of the button that has been clicked
  imageUrl: ICssStyles;

  handleClick(event: IButtonEvent) {
    if(event.buttonCommandType === ButtonCommandTypesEnum.Command){
      this.processEventCommand(event.eventName)
    }else if(event.buttonCommandType === ButtonCommandTypesEnum.TextStyler){
      this.changeValue = Math.random().toString();
      this.buttonEvent = event.eventName;
    }
  }
  processEventCommand(eventName: ButtonEventEnums) {
    switch (eventName) {
      case ButtonEventEnums.Edit:
        this.setEdit();
        break;
      case ButtonEventEnums.FontFamily:
        this.isShowFontPicker = !this.isShowFontPicker;
        break;
      case ButtonEventEnums.ForeColour:
        this.isShowColourPicker = !this.isShowColourPicker;
        this.isEditingColor = !this.isEditingColor;
        break;
      case ButtonEventEnums.BackgroundColour:
        this.isShowColourPicker = !this.isShowColourPicker;
        this.isEditingBackgroundColor = !this.isEditingBackgroundColor;
        break;
      case ButtonEventEnums.UploadFile:
        this.showURLLink = false;
        this.showUploadImage = !this.showUploadImage;
        break;
      case ButtonEventEnums.ImageBackgroundColour:
        this.isShowColourPicker = !this.isShowColourPicker;
        this.isEditingImageBackgroundColor = !this
          .isEditingImageBackgroundColor;
        break;
      case ButtonEventEnums.ImageDecreaseSize:
        this.imageButtonEvent = eventName;
        break;
      case ButtonEventEnums.ImageIncreaseSize:
        this.imageButtonEvent = eventName;
        break;
      case ButtonEventEnums.ImageLeft:
        this.imageButtonEvent = eventName;
        break;
      case ButtonEventEnums.ImageRight:
        this.imageButtonEvent = eventName;
        break;
      case ButtonEventEnums.ImageUp:
        this.imageButtonEvent = eventName;
        break;
      case ButtonEventEnums.ImageDown:
        this.imageButtonEvent = eventName;
        break;
      case ButtonEventEnums.UploadUrl:
        this.showURLLink = !this.showURLLink;
        this.showUploadImage = false;
        break;
      case ButtonEventEnums.Save:
        this.savePage();
        break;
      case ButtonEventEnums.RetrieveSavedData:
        this.getTemplate();
        break;
      case ButtonEventEnums.Publish:
        this.buttonEvent = ButtonEventEnums.Publish;
        break;
      default:

        break;
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
    this.buttonEvent = ButtonEventEnums.FontFamily;
    this.changeValue = font;
  }

  setEdit() {
    if (!this.isShowColourPicker) {
      this.isEditing = !this.isEditing;
    }
  }

  handleTextEditorClick() {
    this.showTextEditor = !this.showTextEditor && this.isEditing && !this.isShowColourPicker;
    this.isEditing = true;
  }

  getStyleValue( stylesArray: ICssStyles[], styleTofind: cssStyleEnum ): ICssStyles {
    return stylesArray.filter(style => style.pmStyleProperty === styleTofind)[0];
  }

  setColor(color: string) {
    if (this.isEditingColor) {
      this.buttonEvent = ButtonEventEnums.ForeColour;
      this.changeValue = color;
      this.isEditingColor = !this.isEditingColor;
    }
    if (this.isEditingBackgroundColor) {
      this.changeValue = color;
      this.buttonEvent = ButtonEventEnums.BackgroundColour;
      this.isEditingBackgroundColor = !this.isEditingBackgroundColor;
    }
    if (this.isEditingImageBackgroundColor) {
      this.imageButtonEvent = ButtonEventEnums.ImageBackgroundColour;
      this.imageChangedValue = color;
      this.isEditingImageBackgroundColor = !this.isEditingImageBackgroundColor;
    }
    this.isShowColourPicker = !this.isShowColourPicker;
  }

  handleFileUploaded(url: string) {
    this.showUploadImage = !this.showUploadImage;
    this.imageButtonEvent = ButtonEventEnums.UploadUrl;
    this.changeValue = url;
    this.imageUrl.value = url;
  }

  handleFileUploadCancelClicked() {
    this.showUploadImage = !this.showUploadImage;
  }

  handleUrl(url: string) {
    console.log("HandleUrl")
    this.showURLLink = !this.showURLLink;
    this.imageButtonEvent = ButtonEventEnums.UploadUrl;
    this.changeValue = url;
    // this.imageUrl.value = url;
  }

  handleUrlCancelClicked() {
    this.showURLLink = !this.showURLLink;
  }

  displayStatusMessage(message: string, messageType: messageTypes) {
    this.statusMessage.message = message;
    this.statusMessage.messageType = messageType;
    this.isShowStatus = true;
    setTimeout(() => {
      this.isShowStatus = false;
      alert("timeout expired");
    }, 3000);
  }

  removeUserControlledElementsFromMasterLayout() {
    let pageLayouts: ILayout[] = this.pageMasterLayout.children.filter(
      childElement =>
        childElement.layoutType === PageAreaTypesEnum.masterPageTemplate
    );
    this.pageMasterLayout.children = pageLayouts;
  }

  assemblePage(stylesArray: ICssStyles[]): ILayout {
    this.layoutText.styles = stylesArray;
    this.removeUserControlledElementsFromMasterLayout();
    this.pageMasterLayout.children[0].children.push(this.layoutText);
    // this.layoutImageParent.styles.push(this.imageBackGroundColor);
    // this.layoutImageChild.styles = this.buildStyleArrayImage();
    this.layoutImageParent.children.push(this.layoutImageChild);
    this.pageMasterLayout.children[0].children.push(this.layoutImageParent);
    return this.pageMasterLayout;
  }

  savePage() {
    if (this.pageMaster.uid != "") {
      this.buttonEvent = ButtonEventEnums.UpdateRecord;
    } else {
      this.buttonEvent = ButtonEventEnums.Save;
    }
  }

  createRecord(stylesArray: ICssStyles[]) {
    this.pageMaster = {
      uid: "",
      pageRef: "12",
      pageName: "page 1",
      template: pageTemplates.sqImgText,
      layout: this.assemblePage(stylesArray)
    };

    this.pageService
      .addRecord(this.pageMaster)
      .then(result => {
        if (result.result) {
          this.pageMaster.id = result.msg;
          this.displayStatusMessage("Content saved", messageTypes.information);
        } else {
          this.displayStatusMessage(
            `Error: ${result.message}`,
            messageTypes.warning
          );
        }
      })
      .catch(err => {
        this.displayStatusMessage(`Error: ${err.message}`, messageTypes.error);
      });
  }

  // update the record in fireBase
  updateRecord(stylesArray: ICssStyles[]) {
    this.pageMaster.layout = this.assemblePage(stylesArray);
    this.pageService
      .updateRecord(this.pageMaster)
      .then(res => {
        this.displayStatusMessage("Record Updated", messageTypes.information);
      })
      .catch(err => {
        this.displayStatusMessage(err.message, messageTypes.error);
      });
  }

  getStylesFromLoadedData(styles: ICssStyles[], layoutType: PageAreaTypesEnum) {
    if (layoutType == PageAreaTypesEnum.textArea) {
      // this.textStyles = new TextStyles();
      // this.textStyles.setStyles(styles);
    }
    // styles.forEach(style => {
    //   switch (style.pmStyleProperty) {
    //     case cssStyleEnum.backgroundColor:
    //       if (layoutType === PageAreaTypesEnum.imageArea)
    //         this.imageBackGroundColor = style;
    //       break;
    //     case cssStyleEnum.height:
    //       this.imageHeight = style;
    //       break
    //     case cssStyleEnum.left:
    //       this.imageLeft = style;
    //       break;
    //     case cssStyleEnum.top:
    //       this.imageTop = style;
    //       break;
    //     case cssStyleEnum.url:
    //       this.imageUrl = style;
    //       break;
    //     case cssStyleEnum.width:
    //       this.imageWidth = style;
    //       break;
    //   }
    // });
  }

  processLayoutContent(layouts: ILayout[]): void {
    layouts.forEach(childLayout => {
      this.getStylesFromLoadedData(childLayout.styles, childLayout.layoutType);
      if (childLayout.layoutType === PageAreaTypesEnum.textArea)
        this.layoutText.content = childLayout.content;
      if (childLayout.children.length > 0)
        this.processLayoutContent(childLayout.children);
    });
  }

  getTemplate() {
    this.pageService.getRecord(pageTemplates.sqImgText).subscribe(result => {
      let page: IPage = result[0];
      this.pageMaster = page;
      this.fontService.getFontNames();
      this.processLayoutContent(page.layout.children);
    });
  }

  publish(stylesArray: ICssStyles[]) {
    let pageLayout: ILayout = this.assemblePage(stylesArray);
    this.pageMaster.layout = pageLayout;
    this.pageBuilder
      .createPage(this.pageMaster, "main.css")
      .then(result => {
        this.statusMessage = result;
        this.isShowStatus = !this.isShowStatus;
      })
      .catch(err => {
        this.statusMessage = err;
        this.isShowStatus = !this.isShowStatus;
      });
  }
}
