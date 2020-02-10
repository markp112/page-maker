import { Component, OnInit, Input } from "@angular/core";

// interface intialisers
// import { initImageStylesInitial } from "../../../../assets/data/interface-initialisers/imageInitial";
import { initSqImgTxtPage } from "../../../../assets/data/interface-initialisers/page-square-image-text-initial";
import {
  IStatusMessage,
  messageTypes
} from "../../../models/interfaces/status-message";
import { IPage, pageTemplates } from "../../../models/interfaces/page";
import { IIconButton } from "@app/models/interfaces/icon-button";
import { PageAreaTypesEnum } from "../../../models/enums/pageAreaTypes.enum";

// services

import { FontsService } from "../../../shared/fonts.service";
import { ILayout } from "src/app/models/interfaces/layout";

import { ICssStyles } from "src/app/models/interfaces/cssStyle";
import { cssStyleEnum } from "src/app/models/enums/cssStylesEnum";
import { ToolBarBuilder } from "src/app/models/classes/builders/text-tool-bar-builder/Tool-bar-builder";
import { ToolbarTypesEnum } from "src/app/models/enums/toolbar-types-enum";
import { ButtonEventEnums } from "src/app/models/enums/ButtonEventEnums";

import { IButtonEvent } from "src/app/models/interfaces/button-event";
import { ButtonCommandTypesEnum } from "src/app/models/enums/Button-Command-Type-enums";
import { SqImgTxtTemplateService } from "src/app/shared/templates/builders/sq-img-txt-template.service";
import { TextContentService } from 'src/app/shared/text-content/text-content.service';
import { IListItem } from '@app/modules/shared/drop-down/drop-down/models/model';
import { DropDownModule } from '@app/modules/shared/drop-down/drop-down.module';

@Component({
  selector: "app-template-sq-img-txt",
  templateUrl: "./template-sq-img-txt.component.html",
  styleUrls: ["./template-sq-img-txt.component.scss"]
})
export class TemplateSqImgTxtComponent implements OnInit {
  @Input() contentText: string;

  constructor(
    private _thePageConstructorService: SqImgTxtTemplateService,
    private theTextContentService: TextContentService,
    private fontService: FontsService//do not delete required for fonts to update correctly

  ) {}

  ngOnInit() {
  //build the toolbars
    let builder = new ToolBarBuilder();
    console.log("NgonInit Called")
    this.textEditButtonsGrp1 = builder.build(ToolbarTypesEnum.TextAlignment);

    // this.textEditButtonsGrp3 = builder.build(
    //   ToolbarTypesEnum.TextColourSettings
    // );
    // this.textEditButtonsGrp4 = builder.build(
    //   ToolbarTypesEnum.VerticalAlignment
    // );
    // this.imgEditButtons = builder.build(ToolbarTypesEnum.ImageCaptureButtons);
    // this.imgPositionButtons = builder.build(
    //   ToolbarTypesEnum.ImagePositionButtons
    // );
    // this.imgSizeButtons = builder.build(ToolbarTypesEnum.ImageSizeButtons);

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


  clickevent: string; // holds the value of the button that has been clicked
  // imageUrl: ICssStyles;

  handleClick(event: IButtonEvent) {
    if (event.buttonCommandType === ButtonCommandTypesEnum.Command) {
      this.processEventCommand(event.eventName);
    } else if (event.buttonCommandType === ButtonCommandTypesEnum.TextStyler) {
      this.changeValue = Math.random().toString();
      this.buttonEvent = event.eventName;
    } else if (event.buttonCommandType === ButtonCommandTypesEnum.ImageStyler) {
      this.imageChangedValue = Math.random().toString();
      this.imageButtonEvent = event.eventName;
    }
  }


  processEventCommand(eventName: ButtonEventEnums) {
    switch (eventName) {
      case ButtonEventEnums.Edit:
        this.setEdit();
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
    this.theTextContentService.textContent = content;
  }

  handleSelectFont(font: string) {
    console.log('%c%s', 'color: #f2ceb6', font, "handle font  change");
    this.buttonEvent = ButtonEventEnums.FontFamily;
    this.changeValue = font;
  }

  handleFontSizeChange(fontSize: IListItem){

    console.log('%c%s', 'color: #bb5a19',fontSize, "handle font size change");
    this.buttonEvent = ButtonEventEnums.ChangeFontSize;
    this.changeValue = fontSize.listItem;
  }

  setEdit() {
    if (!this.isShowColourPicker) {
      this.isEditing = !this.isEditing;
    }
  }

  handleTextEditorClick() {
    this.showTextEditor =
      !this.showTextEditor && this.isEditing && !this.isShowColourPicker;
    this.isEditing = true;
  }

  getStyleValue(
    stylesArray: ICssStyles[],
    styleTofind: cssStyleEnum
  ): ICssStyles {
    return stylesArray.filter(
      style => style.pmStyleProperty === styleTofind
    )[0];
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
    this.imageChangedValue = url;
  }

  handleFileUploadCancelClicked() {
    this.showUploadImage = !this.showUploadImage;
  }

  handleUrl(url: string) {
    this.showURLLink = !this.showURLLink;
    this.imageButtonEvent = ButtonEventEnums.UploadUrl;
    this.imageChangedValue = url;
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

    }, 3000);
  }

  savePage() {
    console.log('this._thePageConstructorService','%c⧭', 'color: #00a3cc', this._thePageConstructorService);
    console.log('%c⧭', 'color: #aa00ff', this._thePageConstructorService.pageId ,'pageId = ');
    if (this._thePageConstructorService.pageId === "") {
      this.buttonEvent = ButtonEventEnums.Save;
      this.createRecord()
    } else {
      this.updateRecord();
    }
  }

  createRecord() {
    this._thePageConstructorService
      .createNewRecord()
      .then(result => {
        if (result.isSuccessful) {
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
  private updateRecord() {
    this._thePageConstructorService
      .updateRecord()
      .then(result => {
        if (result.isSuccessful) {
          this.displayStatusMessage("Content updated", messageTypes.information);
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


    // this.pageMaster.layout = this.assemblePage(stylesArray);
    // this.pageService
    //   .updateRecord(this.pageMaster)
    //   .then(res => {
    //     this.displayStatusMessage("Record Updated", messageTypes.information);
    //   })
    //   .catch(err => {
    //     this.displayStatusMessage(err.message, messageTypes.error);
    //   });
  }

  getTemplate() {
    this._thePageConstructorService.getThePage()
    .then(() =>{
      this.changeValue = ""
      this.imageChangedValue = ""
      this.imageButtonEvent = ButtonEventEnums.RetrieveAllStyles;
      this.buttonEvent = ButtonEventEnums.RetrieveAllStyles;
    })
  }

  publish(stylesArray: ICssStyles[]) {
    // let pageLayout: ILayout = this.assemblePage(stylesArray);
    // this.pageMaster.layout = pageLayout;
    // this.pageBuilder
    //   .createPage(this.pageMaster, "main.css")
    //   .then(result => {
    //     this.statusMessage = result;
    //     this.isShowStatus = !this.isShowStatus;
    //   })
    //   .catch(err => {
    //     this.statusMessage = err;
    //     this.isShowStatus = !this.isShowStatus;
    //   });
  }
}
