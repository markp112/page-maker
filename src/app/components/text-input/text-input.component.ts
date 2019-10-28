import { Component, OnInit } from '@angular/core';
import {textEditorButtonsGrp1, textEditorButtonsGrp2, textEditorButtonsGrp3} from 'src/assets/data/mock/text-input-toolbar';
import { IIconButton } from 'src/app/models/interfaces/icon-button-interface';

@Component({
  selector: "app-text-input",
  templateUrl: "./text-input.component.html",
  styleUrls: ["./text-input.component.scss"]
})
export class TextInputComponent implements OnInit {
  buttonGroup1: IIconButton[] = textEditorButtonsGrp1;
  buttonGroup2: IIconButton[] = textEditorButtonsGrp2;
  buttonGroup3: IIconButton[] = textEditorButtonsGrp3;

  constructor() {}
  rows = 12;
  cols = 70;
  placeholder = "Enter text to appear on page";

  ngOnInit() {}
}
