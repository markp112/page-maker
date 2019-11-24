import { textHorizontalAlignment, textVerticalAlignment } from '../enums/text-component.enum'

// export interface IText {
//   container: string;    // holds the css that structurally styles this element as in flex row etc
//   font: string;
//   size: number;
//   horizontalAlignment: textHorizontalAlignment,
//   verticalAlignment: textVerticalAlignment,
//   color: string,
//   backgroundColor: string,
//   content: string
// }

export interface ITextAlignment {

  horizontalAlignment: textHorizontalAlignment,
  verticalAlignment: textVerticalAlignment,

}
