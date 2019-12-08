import { Injectable } from '@angular/core';
import { FontApiService } from './font-api.service';
import { IGooglefont } from '../models/interfaces/google-font-api';
import * as WebFont from "webfontloader";

class IFontItem {
  _fontName: string;
  _fontType: string;

  constructor(fontName: string, fontType: string) {
    this._fontName = fontName;
    this._fontType = fontType;
  }
}

@Injectable({
  providedIn: 'root'
})
export class FontsService {
  public fontNames: IFontItem[] = [];
  public fontData: IGooglefont;
  public fontNameList: string[];

  constructor(private apiService: FontApiService) {
    this.fontNames = [];
    this.fontNameList = [];
    apiService.getFonts().subscribe(res => {
      this.fontData = res;
      this.fontData.items.forEach(font => {
        let fontDetail = new IFontItem(font.family.toString(), font.category.toString());
        this.fontNames.push(fontDetail)
        this.fontNameList.push(fontDetail._fontName);
      });

      WebFont.load({
        google: {
          families: this.fontNameList
        }
      });
    });
  }

  getFontNames(): string[] {
    return this.fontNameList;
  };

  filterFontNames(searchTerm: string): string[] {
    let filtered: string[] = this.fontNameList.filter(font => font.toLowerCase().includes(searchTerm.toLowerCase().trim()));
    return filtered;
  }

  filterFontTypes(fontType: string): string[] {
    console.log("fontType=", fontType)
    let filteredTypes: string[] = [];
    let filtered = this.fontNames.filter(font => font._fontType.toLowerCase().trim() === fontType);
    filtered.forEach(font => filteredTypes.push(font._fontName));
    return filteredTypes;
  }

}
