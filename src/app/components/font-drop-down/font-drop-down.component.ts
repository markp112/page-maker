import { Component, OnInit } from '@angular/core';
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
  fontFamilies:string[];
 

  constructor() { }

  ngOnInit() {
    googleFont.items.forEach(font =>{
      this.fontFamilies.push(font.family);
    })
  

    WebFont.load({
      
      google: {
        families: this.fontFamilies
      }
    });
  }

}
