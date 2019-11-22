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
import { textInitial } from "../../../../assets/data/interface-initialisers/textInitial";
import { imageInitial } from "../../../../assets/data/interface-initialisers/imageInitial";
// import { pageMasterInitial } from '../../../../assets/data/interface-initialisers/pageMasterInitial';
// interfaces
import { IImage } from "src/app/models/interfaces/image";
import { IText } from "src/app/models/interfaces/text";
import { IStatusMessage,  messageTypes } from "../../../models/interfaces/status-message";
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
import { HtmlTags } from 'src/app/models/enums/htmlTags';
import { initLayoutSqImgText, initLayoutSqImgImage, layoutInitial } from 'src/assets/data/interface-initialisers/layout-Initial';
import { ICssStyles } from 'src/app/models/interfaces/cssStyle';

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
  ) {}

  ngOnInit() { }

  pageTemplate: ILayout = layoutInitial;
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
  ShowUploadImage: boolean = false;
  showURLLink: boolean = false;
  isEditingImageBackgroundColor: boolean = false;
  statusMessage: IStatusMessage = {
    message: "",
    messageType: messageTypes.warning
  };

  layoutText: ILayout = initLayoutSqImgText();
  layoutImage: ILayout = initLayoutSqImgImage();
  //variables linked to the image
  imageRef:ICssStyles[] = imageInitial;
  textRef:ICssStyles[]  = textInitial;
  page: IPage;
  path: string = "images/";
  clickevent: string;
  isDirty: boolean = false;

  handleClick(event) {
    this.isDirty = true;
    switch (event) {
      case "editClicked":
        this.setEdit();
        break;
      case "increaseFont":
        this.textRef.size++;
        this.layoutText.textStyles.size++;
        break;
      case "decreaseFont":
        this.textRef.size--;
        this.layoutText.textStyles.size--;
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
        this.imageRef.url = "";
        this.ShowUploadImage = !this.ShowUploadImage;
        break;
      case "imageBackgroundColor":
        this.isShowColourPicker = !this.isShowColourPicker;
        this.isEditingImageBackgroundColor = !this.isEditingImageBackgroundColor;
        break;
      case "imgDecreaseSize":
        this.imageRef.height--;
        this.imageRef.width--;
        break;
      case "imgIncreaseSize":
        this.imageRef.height++;
        this.imageRef.width--;
        break;
      case "imgLeft":
        this.imageRef.position.left--;
        break;
      case "imgRight":
        this.imageRef.position.left++;
        break;
      case "imgUp":
        this.imageRef.position.top--;
        break;
      case "imgDown":
        this.imageRef.position.top++;
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
    this.layoutText.styles["font"].value = font;
  }

  setEdit() {
    if (!this.isShowColourPicker) {
      this.isEditing = !this.isEditing;
    }
  }

  setColor(color: string) {
    if (this.isEditingColor) {
      this.layoutText.styles[color].value = color;
      this.isEditingColor = !this.isEditingColor;
    }
    if (this.isEditingBackgroundColor) {
      this.layoutText.styles["backgroundColor"] = color;
      this.isEditingBackgroundColor = !this.isEditingBackgroundColor;
    }
    if (this.isEditingImageBackgroundColor) {
      this.layoutImage.styles["background-color"] = color;
      this.isEditingImageBackgroundColor = !this.isEditingImageBackgroundColor;
    }
    this.isShowColourPicker = !this.isShowColourPicker;
  }

  handleFileUploaded(URL: string) {
    this.ShowUploadImage = !this.ShowUploadImage;
    this.layoutImage.content = URL;
  }

  handleUrl(url: string) {
    this.showURLLink = !this.showURLLink;
    this.layoutImage.content = url;
  }

  displayStatusMessage(message: string, messageType: messageTypes) {
    this.statusMessage.message = message;
    this.statusMessage.messageType = messageType;
    this.isShowStatus = true;
    setTimeout(() => { this.isShowStatus = false; alert('timeout expired'); }, 3000);
  }

  savePage() {
    if (this.page.uid != "") {
      this.updateRecord();
    } else this.createRecord();
  }

  createRecord() {
    // let textAreas: IText[] = [];
    // let imageAreas: IImage[] = [];
    // textAreas.push(this.textRef);
    // imageAreas.push(this.imageRef);

    this.page = {
      uid: "",
      pageRef: "12",
      pageName: "page 1",
      template: pageTemplates.sqImgText,
      // textAreas: textAreas,
      // imageAreas: imageAreas
    };
    this.pageService
      .addRecord(this.page)
      .then(result => {
        if (result.result) {
          this.isDirty = false;
          this.page.id = result.msg;
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
    let textAreas: IText[] = [];
    let imageAreas: IImage[] = [];
    textAreas.push(this.layoutText.textStyles);
    imageAreas.push(this.imageRef);

    this.page.imageAreas = imageAreas;
    this.page.textAreas = textAreas;

    this.pageService
      .updateRecord(this.page)
      .then(res => {
        this.displayStatusMessage("Record Updated", messageTypes.information);

      })
      .catch(err => {console.log(err)
        this.displayStatusMessage(err.message, messageTypes.error)
      });
  }

  getTemplate() {
    this.pageService.getRecord(pageTemplates.sqImgText).subscribe(result => {
      let page = result[0];
      console.log("TCL: TemplateSqImgTxtComponent -> getTemplate -> page", page)
      this.fontService.getFontNames();
      this.imageRef = page.imageAreas[0];
      console.log("TCL: TemplateSqImgTxtComponent -> getTemplate -> layoutImage", this.layoutImage)
      console.log("TCL: TemplateSqImgTxtComponent -> getTemplate -> page.imageAreas[0]", page.imageAreas[0])
      this.layoutText.textStyles = page.textAreas[0];
      this.page = page;
    });
  }

  publish() {
    console.log("Ipage=", this.page, "pageTemplate=", this.pageTemplate);
    this.pageTemplate.children = [];
    this.pageTemplate.children.push(this.layoutText);
    this.pageTemplate.children.push(this.layoutImage);
    this.pageBuilder.createPage(this.page, this.pageTemplate)
    .then(result => {
      this.statusMessage = result;
      this.isShowStatus = true;

    })
  }
}
