import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import  {IGooglefont, } from 'src/app/models/interfaces/google-font-api'
import { googleFont } from 'src/assets/data/mock/google-font';
import * as WebFont from "webfontloader";


@Component({
  selector: "app-font-drop-down",
  templateUrl: "./font-drop-down.component.html",
  styleUrls: ["./font-drop-down.component.scss"]
})
export class FontDropDownComponent implements OnInit {
  googleFont: IGooglefont = googleFont;
  fontFamilies: string[] = [];
  fontsFiltered: IGooglefont;

  @Output() handleFontSelected: EventEmitter<string> = new EventEmitter();

  handleListItemClick(fontName) {
    this.handleFontSelected.emit(fontName);
  }

  handleSearchInput(searchValue: string) {
    console.log(this.fontsFiltered.items);
    console.log(this.googleFont.items);
    const search = searchValue.toLowerCase();
  
    this.fontsFiltered.items = this.googleFont.items.filter(font => {
      return font.family
        .toLowerCase()
        .replace(" ", "-")
        .includes(search);
    });   
  }

  constructor() {}

  ngOnInit() {
    googleFont.items.forEach(font => {
      this.fontFamilies.push(font.family.toString());
    });
    this.fontsFiltered = this.googleFont;
    WebFont.load({
      google: {
        families: this.fontFamilies
      }
    });
  }
}
