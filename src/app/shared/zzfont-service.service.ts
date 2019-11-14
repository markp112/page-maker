// import { Injectable } from '@angular/core';
// import { IGooglefont } from "src/app/models/interfaces/google-font-api";
// import { googleFont } from "src/assets/data/mock/google-font";
// import * as WebFont from "webfontloader";

// @Injectable({
//   providedIn: "root"
// })
// export class FontServiceService {
//   googleFont: IGooglefont = googleFont;
//   fontFamilies: string[] = [];
//   fontsFiltered: IGooglefont;

//   getFonts(filter:string):IGooglefont {
//     if(!filter) { return this.fontsFiltered}
  
//       const search = filter.toLowerCase().trim();
//       this.fontsFiltered.items = this.googleFont.items.filter(font => {
//         return font.family
//           .toLowerCase()
//           .replace(" ", "-")
//           .includes(search);
//       });  
    
//   }
//   constructor() {
//     googleFont.items.forEach(font => {
//       this.fontFamilies.push(font.family.toString());
//     });
    
//     this.fontsFiltered = this.googleFont;
//     WebFont.load({
//       google: {
//         families: this.fontFamilies
//       }
//     });
//   }
// }
