import { textHorizontalAlignment, textVerticalAlignment } from '../enums/text-component.enum'

export interface IText {
  font: string;
  size: number;
  horizontalAlignment: textHorizontalAlignment,
  verticalAlignment: textVerticalAlignment,
  color: string,
  backgroundColor: string
}
