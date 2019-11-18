import { pageLayoutTypes } from '../enums/pageLayouts.enum';
import { IPageAreas } from './pageAreas-interface';
import { ILayout } from './layout';


// defines an area of the page including the layout.
// this should be set up on each template which defines the structure of the template and
// the elements within it.
// export interface IPageMaster {
//   pageLayoutCss: string;        // css defining the actual layout
//   layoutType: pageLayoutTypes;  // layout type is this a grid, flex etc
//   layouts: ILayout[];           // layouts for this page as in the elements that make up the page
//   AreaNames: IPageAreas[];      //  contains the name and type for each area in this section
// }                               // as in is this an image, text and the name of the element on the page
//                                 // this then links the IPage image areas and text areas which will have a matching
//                                 // name which is taken from the element on the page template

