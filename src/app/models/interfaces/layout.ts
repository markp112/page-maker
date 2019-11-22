import { HtmlTags } from '../enums/htmlTags';
import { ICssStyles } from './cssStyle';
import { IText } from './text';
import { IImage } from './Image';

export interface ILayout {
    htmlTag: HtmlTags;    // html tag for this element
    cssClass: string;     // css Class defintion for this element - this is static and not under user control
    className: string;    // name of the clas the cssClass should only contain the css but not the name
    content: string;
                          // class name is required for the html tag
    styles: ICssStyles[]; // contains the list of styles a user can adjust
    children: ILayout[];   // if this element has further nested elements
}

// export interface ITextLayout extends ILayout {
//     textStyles: IText;
// }

// export interface IImageLayout extends ILayout {
//   imageStyles: IImage;
// }
