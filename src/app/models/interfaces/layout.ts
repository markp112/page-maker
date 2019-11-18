import { HtmlTags } from '../enums/htmlTags';
import { ICssStyles } from './cssStyle';

export interface ILayout {
    htmlTag: HtmlTags;    // html tag for this element
    cssClass: string;     // css Class defintion for this element - this is static and not under user control  
    styles: ICssStyles[]; // contains the list of styles a user can adjust  
    children:ILayout[];   // if this element has further nested elements 
}