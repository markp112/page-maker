import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import  {IGooglefont, } from 'src/app/models/interfaces/google-font-api'
import { googleFont } from 'src/assets/data/mock/google-font';
import * as WebFont from "webfontloader";


@Component({
  selector: 'app-font-drop-down',
  templateUrl: './font-drop-down.component.html',
  styleUrls: ['./font-drop-down.component.scss']
})
export class FontDropDownComponent implements OnInit {


  googleFont:IGooglefont = googleFont;
  fontFamilies:string[] =[];

  @Output() handleFontSelected:EventEmitter<string> = new EventEmitter();

  handleListItemClick(fontName){
    this.handleFontSelected.emit(fontName);
  }

  constructor() { }

  ngOnInit() {
    googleFont.items.forEach(font =>{
      this.fontFamilies.push(font.family.toString());
    })

    WebFont.load({

      google: {
        families: this.fontFamilies
      }
    });
  }

}
