import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import  {IGooglefont, } from 'src/app/models/interfaces/google-font-api'
import { googleFont } from 'src/assets/data/mock/google-font';
import { FontApiService } from 'src/app/shared/font-api.service';
import * as WebFont from "webfontloader";


@Component({
  selector: 'app-font-drop-down',
  templateUrl: './font-drop-down.component.html',
  styleUrls: ['./font-drop-down.component.scss']
})
export class FontDropDownComponent implements OnInit {


  googleFont:IGooglefont = googleFont;
  fontFamilies:string[] = [];
  filteredFonts:IGooglefont;

  @Output() handleFontSelected:EventEmitter<string> = new EventEmitter();

  handleListItemClick(fontName){
    this.handleFontSelected.emit(fontName);
  }

  constructor(private apiService: FontApiService) { }

  ngOnInit() {
    // googleFont.items.forEach(font =>{
    //   this.fontFamilies.push(font.family.toString());
    // })
    this.apiService.getFonts().subscribe(res=>{
      this.filteredFonts = res;
      this.filteredFonts.items.forEach(font =>{
        this.fontFamilies.push(font.family.toString());
      })
      
      WebFont.load({
        google: {
          families: this.fontFamilies
        }
      });
    });

  }

}
