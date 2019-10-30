import { Injectable, APP_ID } from '@angular/core';
import {FontApiService} from './font-api.service';
import { IGooglefont,Item } from '../models/interfaces/google-font-api';
import * as WebFont from "webfontloader";

@Injectable({
  providedIn: 'root'
})
export class FontsService {

  private fontNames:string[];
  public fontData:IGooglefont;

  getFontNames():string[]{
    return this.fontNames
  }

  constructor(private apiService: FontApiService) { 
    this.fontNames = [];
    apiService.getFonts().subscribe(res =>{
      this.fontData=res;
      this.fontData.items.forEach(font=> {
        this.fontNames.push(font.family.toString())
      });
      WebFont.load({
        google: {
          families: this.fontNames
        }
      });
    });
  }
}