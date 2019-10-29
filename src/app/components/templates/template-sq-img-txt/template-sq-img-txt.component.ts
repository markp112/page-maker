import { Component, OnInit, Input, ɵConsole } from "@angular/core";
import { IIconButton } from "src/app/models/interfaces/icon-button-interface";
import { templateInitial } from "src/assets/data/mock/template-toolbar";
import {
  textEditorButtonsGrp1,
  textEditorButtonsGrp2,
  textEditorButtonsGrp3,
  textEditorButtonsGrp4
} from "src/assets/data/mock/text-input-toolbar";

@Component({
  selector: "app-template-sq-img-txt",
  templateUrl: "./template-sq-img-txt.component.html",
  styleUrls: ["./template-sq-img-txt.component.scss"]
})
export class TemplateSqImgTxtComponent implements OnInit {
  nonEditButtons: IIconButton[] = templateInitial;
  textEditButtonsGrp1: IIconButton[] = textEditorButtonsGrp1;
  textEditButtonsGrp2: IIconButton[] = textEditorButtonsGrp2;
  textEditButtonsGrp3: IIconButton[] = textEditorButtonsGrp3;
  textEditButtonsGrp4: IIconButton[] = textEditorButtonsGrp4;

  isEditing: boolean = false;
  showTextEditor: boolean = false;
  isShowFontPicker: boolean = false;
  // variable definitions to support applying classes based on user selection
  alignLeft: boolean = true;
  alignRight: boolean = false;
  alignCenter: boolean = false;
  alignTextJustify: boolean = false;
  verticalAlignTop: boolean = true;
  verticalAlignBottom: boolean = false;
  verticalAlignCentre: boolean = false;

  fontSize: number = 16;
  fontFamily: string = "Acme"

  @Input() contentText: string;

  handleClick(event) {

    switch (event) {
      case "editClicked":
        this.setEdit();
        break;

      case "alignRight":

        this.alignRight = true;
        this.alignLeft = false;
        this.alignCenter = false;
        this.alignTextJustify = false;
        break;

      case "alignLeft":

        this.alignRight = false;
        this.alignLeft = true;
        this.alignCenter = false;
        this.alignTextJustify = false;
        break;

      case "alignCenter":
        this.alignRight = false;
        this.alignLeft = false;
        this.alignCenter = true;
        this.alignTextJustify = false;
        break;

      case "textAlignJustify":
        this.alignTextJustify = true;
        break;

      case "verticalAlignTop":
        this.verticalAlignTop = true;
        this.verticalAlignBottom = false;
        this.verticalAlignCentre = false;
        break;

      case "verticalAlignBottom":
        this.verticalAlignTop = false;
        this.verticalAlignBottom = true;
        this.verticalAlignCentre = false;
        break;

      case "verticalAlignCentre":
        this.verticalAlignTop = false;
        this.verticalAlignBottom = false;
        this.verticalAlignCentre = true;
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
    }
  }
  getClasses() {
    let classes = [];
    classes.push(this.fontFamily);
    if (!this.showTextEditor) classes.push('text-area-non-edit');
    if (this.alignLeft) classes.push('align-content-left');
    if (this.alignRight) classes.push('align-content-right');
    if (this.alignCenter) classes.push('align-content-center');
    if (this.alignTextJustify) classes.push('text-align-justify');
    if (this.verticalAlignBottom) classes.push('vertical-align-bottom');
    if (this.verticalAlignTop) classes.push('vertical-align-top');
    if (this.verticalAlignCentre) classes.push('vertical-align-centre');

    return classes;
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
    this.fontFamily = font.toLowerCase().replace(' ', '-');
  }

  setEdit() {
    this.isEditing = !this.isEditing;
    this.showTextEditor = this.isEditing;
  }

  constructor() { }

  ngOnInit() { }
}
