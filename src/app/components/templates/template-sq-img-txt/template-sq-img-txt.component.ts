import { Component, OnInit, Input } from '@angular/core';
import { IIconButton } from 'src/app/models/interfaces/icon-button-interface';
import { templateInitial } from 'src/assets/data/mock/template-toolbar';
import { textEditorButtonsGrp1, textEditorButtonsGrp2, textEditorButtonsGrp3 } from 'src/assets/data/mock/text-input-toolbar';

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

  isEditing: boolean = false;

  showTextEditor: boolean = false;

  @Input() contentText: string;

  handleClick(event){
    switch(event){
      case "editClicked":
        this.setEdit();
        break;
    }
  }

  closeTextInput(){
    console.log("came here ", this.showTextEditor, this.isEditing)
    this.isEditing = false;
  }

  setEdit() {
    this.isEditing = !this.isEditing;
    this.showTextEditor = this.isEditing;
  }

  constructor() {}

  ngOnInit() {}
}
