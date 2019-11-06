import {textHorizontalAlignment, textVerticalAlignment } from '../../../app/models/enums/text-component.enum'

import { IText } from '../../../app/models/interfaces/text';
export const textInitial: IText = {
  font: "monterra",
  size: 16,
  horizontalAlignment: textHorizontalAlignment.alignLeft,
  verticalAlignment: textVerticalAlignment.alignTop,
  color: "rgba(242,226,213, 1)",
  backgroundColor: "rgba(38,1,89, 1)"
}
