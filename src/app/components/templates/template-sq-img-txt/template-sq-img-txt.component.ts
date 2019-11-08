import { Component, OnInit, Input, ɵConsole } from "@angular/core";
import { IIconButton } from "src/app/models/interfaces/icon-button-interface";
import { templateInitial } from "src/assets/data/mock/template-toolbar";
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
import { IImage } from "src/app/models/interfaces/image";
import { IText } from "src/app/models/interfaces/text";
import { textInitial } from "../../../../assets/data/mock/textInitial";
@Component({
  selector: "app-template-sq-img-txt",
  templateUrl: "./template-sq-img-txt.component.html",
  styleUrls: ["./template-sq-img-txt.component.scss"]
})
export class TemplateSqImgTxtComponent implements OnInit {
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
  ShowUploadImage: boolean = false;
  showURLLink: boolean = false;
  isEditingImageBackgroundColor: boolean = false;

  color: string = "rgba(242,226,213, 1)";
  backgroundColor: string = "rgba(38,1,89, 1)";

  //variables linked to the image
  imageRef: IImage;
  textRef: IText = textInitial;
  path: string = "images/";

  fontSize: number = 16;
  fontFamily: string = "Acme";

  clickevent: string;

  @Input() contentText: string;

  constructor() {
    this.imageRef = {
      url: "../../../../assets/images/placeholder-image.png",
      position: {
        top: 0,
        left: 0
      },
      height: 400,
      width: 500,
      backgroundColor: "rgba(241,242,244,1)"
    };
  }

  ngOnInit() {}

  handleClick(event) {
    console.log("event", event);
    switch (event) {
      case "editClicked":
        this.setEdit();
        break;
      case "increaseFont":
        this.fontSize++;
        break;
      case "decreaseFont":
        this.fontSize--;
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
        this.isEditingImageBackgroundColor = !this
          .isEditingImageBackgroundColor;
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
        this.showURLLink =  true;
      default:
        this.clickevent = event;
    }
  }

  //event handlers
  closeTextInput() {
    this.showTextEditor = false;
  }

  textChanged(content) {
    this.contentText = content;
  }
  handleSelectFont(font: string) {
    this.isShowFontPicker = false;
    this.fontFamily = font;
  }

  setEdit() {
    if (!this.isShowColourPicker) {
      this.isEditing = !this.isEditing;
    }
  }

  setColor(color: string) {
    if (this.isEditingColor) {
      this.color = color;
      this.isEditingColor = !this.isEditingColor;
    }
    if (this.isEditingBackgroundColor) {
      this.backgroundColor = color;
      this.isEditingBackgroundColor = !this.isEditingBackgroundColor;
    }
    if (this.isEditingImageBackgroundColor) {
      this.imageRef.backgroundColor = color;
      this.isEditingImageBackgroundColor = !this.isEditingImageBackgroundColor;
    }
    this.isShowColourPicker = !this.isShowColourPicker;
  }

  handleFileUploaded(URL: string) {
    this.ShowUploadImage = !this.ShowUploadImage;
    this.imageRef.url = URL;
  }
}
