import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import  {IGooglefont, } from 'src/app/models/interfaces/google-font-api'
import { googleFont } from 'src/assets/data/mock/google-font';
import { FontsService  } from 'src/app/shared/fonts.service';
import { ToolBarBuilder } from 'src/app/models/classes/builders/text-tool-bar-builder/Tool-bar-builder';
import { ToolbarTypesEnum } from 'src/app/models/enums/toolbar-types-enum';
import { IIconButton } from 'src/app/models/interfaces/icon-button-interface';
import { IButtonEvent } from 'src/app/models/interfaces/button-event';
// import * as WebFont from "webfontloader";


@Component({
  selector: "app-font-drop-down",
  templateUrl: "./font-drop-down.component.html",
  styleUrls: ["./font-drop-down.component.scss"]
})
export class FontDropDownComponent implements OnInit {
  googleFont: IGooglefont = googleFont;
  fontFamilies: string[] = [];
  builder: ToolBarBuilder;
  filteredFonts: IGooglefont;
  toolbarButtons: IIconButton[];

  @Output() handleFontSelected: EventEmitter<string> = new EventEmitter();

  constructor(private fontService: FontsService) {}

  ngOnInit() {
    this.fontFamilies = this.fontService.getFontNames();
    this.builder = new ToolBarBuilder();
    this.toolbarButtons = this.builder.build(ToolbarTypesEnum.FontTypesToolbar);
  }

  handleListItemClick(fontName) {
    this.handleFontSelected.emit(fontName);
  }

  handleButtonClick(whichButton: IButtonEvent): void {
    this.fontFamilies = this.fontService.filterFontTypes(whichButton.eventName.toString());
  }

  handleSearchInput(searchValue: string) {
    this.fontFamilies = this.fontService.filterFontNames(searchValue);
  }
}
