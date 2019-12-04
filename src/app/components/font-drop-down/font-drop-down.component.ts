import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import  {IGooglefont, } from 'src/app/models/interfaces/google-font-api'
import { googleFont } from 'src/assets/data/mock/google-font';
import { FontsService  } from 'src/app/shared/fonts.service';
import {fontDropDownButtons } from 'src/assets/data/mock/font-dropdown-toolbar'
// import * as WebFont from "webfontloader";


@Component({
  selector: "app-font-drop-down",
  templateUrl: "./font-drop-down.component.html",
  styleUrls: ["./font-drop-down.component.scss"]
})
export class FontDropDownComponent implements OnInit {
  googleFont: IGooglefont = googleFont;
  fontFamilies: string[] = [];

  filteredFonts: IGooglefont;
  toolbarButtons = fontDropDownButtons;

  @Output() handleFontSelected: EventEmitter<string> = new EventEmitter();


  constructor(private fontService: FontsService) {}

  ngOnInit() {
    this.fontFamilies = this.fontService.getFontNames();
  }

  handleListItemClick(fontName) {
    this.handleFontSelected.emit(fontName);
  }

  handleButtonClick(whichButton:string):void {
    console.log("filter =",whichButton)
    this.fontFamilies = this.fontService.filterFontTypes(whichButton);
  }

  handleSearchInput(searchValue: string) {
    this.fontFamilies = this.fontService.filterFontNames(searchValue);
  }
}
