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
import { IPage, pageTemplates } from "../../../models/interfaces/page"
import { textInitial } from "../../../../assets/data/mock/textInitial";
import { imageInitial } from "../../../../assets/data/mock/imageInitial";
import { SavePageService } from "../../../shared/save-page.service";
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

    //variables linked to the image
  imageRef: IImage = imageInitial;
  textRef: IText = textInitial;
  page: IPage;
  path: string = "images/";
  clickevent: string;
  isDirty: boolean = false;

  @Input() contentText: string;

  constructor(private pageService: SavePageService) {

  }

  ngOnInit() {}

  handleClick(event) {
    this.isDirty = true;
    switch (event) {
      case "editClicked":
        this.setEdit();
        break;
      case "increaseFont":
        this.textRef.size++;
        break;
      case "decreaseFont":
        this.textRef.size--;
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
      case "saveClicked":
        this.savePage();
        break;
      default:
        this.clickevent = event;
    }
  }

  //event handlers
  closeTextInput() {
    this.showTextEditor = false;
  }

  textChanged(content) {
    this.textRef.content = content;
  }
  handleSelectFont(font: string) {
    this.isShowFontPicker = false;
    this.textRef.font = font;
  }

  setEdit() {
    if (!this.isShowColourPicker) {
      this.isEditing = !this.isEditing;
    }
  }

  setColor(color: string) {
    if (this.isEditingColor) {
      this.textRef.color = color;
      this.isEditingColor = !this.isEditingColor;
    }
    if (this.isEditingBackgroundColor) {
      this.textRef.backgroundColor = color;
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
  handleUrl(url: string){
    this.showURLLink =! this.showURLLink;
    this.imageRef.url = url;
  }

  savePage(){
    console.log("Save Page called")
    let textAreas: IText[] = [];
    let imageAreas: IImage[] = [];
    textAreas.push(this.textRef);
    imageAreas.push(this.imageRef);

    this.page = {
      uid:"",
      pageRef: "12",
      pageName: "page 1",
      template: pageTemplates.sqImgText,
      textAreas:textAreas,
      imageAreas:imageAreas
    }
    this.pageService.addRecord(this.page)
    .then(result => {
      if (result.result){
        this.isDirty = false;
        this.page.id = result.msg;
      } else {
        console.log(result.msg);
        //TO DO Build error handler....
      }
    })



  }
}
