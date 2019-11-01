import { Injectable, APP_ID } from '@angular/core';
import {FontApiService} from './font-api.service';
import { IGooglefont,Item } from '../models/interfaces/google-font-api';
import * as WebFont from "webfontloader";

 class IFontItem  {
    _fontName:string;
    _fontType:string;

      constructor(fontName:string , fontType:string){
        this._fontName = fontName;
        this._fontType = fontType;
      }
  }

@Injectable({
  providedIn: 'root'
})
export class FontsService {
  private fontNames:IFontItem[] =[];
  public fontData:IGooglefont;
  public fontNameList:string [];
  private getFontNameArray():string[]{
    let temp:string[]=[];
    this.fontNames.forEach(font => {
      console.log(font._fontName);
        temp.push(font._fontName)
    });
    console.log("tmep=",temp);
    return temp;
  }
  getFontNames():string[]{ 
    return this.getFontNameArray();
  }

  filterFontNames(searchTerm:string):string[]{
    let filtered:string[] = <string>this.fontNames.filter(font => {
      font._fontName.toLowerCase().includes(searchTerm.toLowerCase().trim())
      return font._fontName;
    })
    return filtered;
  }

  filterFontTypes(fontType: string):string[]{
    let filtered: string[] = this.fontName.filter(font => font.category.toLowerCase() === fontType)
  }

  constructor(private apiService: FontApiService) { 
    this.fontNames = [];
    apiService.getFonts().subscribe(res =>{
      this.fontData = res;
      this.fontData.items.forEach(font => {
        let fontDetail = new IFontItem (font.family.toString(), font.category.toString());
        this.fontNames.push(fontDetail)
      });
 
      this.fontNameList=[];
      this.fontNames.forEach(font => this.fontNameList.push(font._fontName));
      WebFont.load({
        google: {
          families: this.fontNameList
        }
      });
    });
  }
}