import {
  textHorizontalAlignment,
  textVerticalAlignment
} from "../../../app/models/enums/text-component.enum";

// import { IText } from '../../../app/models/interfaces/text';
import { ICssStyles } from "src/app/models/interfaces/cssStyle";
import { cssStyleEnum } from 'src/app/models/enums/cssStylesEnum';

// export const textInitial: IText = {
//   container:'display: flex; flex-direction: column;',
//   font: "Monterra",
//   size: 16,
//   horizontalAlignment: textHorizontalAlignment.alignLeft,
//   verticalAlignment: textVerticalAlignment.alignTop,
//   color: "rgba(242,226,213, 1)",
//   backgroundColor: "rgba(38,1,89, 1)",
//   content:""
// }

export const initTextStylesInitial = (): ICssStyles[] => {
  let textElements: ICssStyles[] = [];
  let color: ICssStyles = {
    styleTag: "color",
    pmStyleProperty: cssStyleEnum.color,
    value: "rgba(242,226,213, 1)"
  };
  let fontSize: ICssStyles = {
    styleTag: "font-size",
    pmStyleProperty: cssStyleEnum.fontSize,
    value: "16"
  };
  let fontFamily: ICssStyles = {
    styleTag: "font-family",
    pmStyleProperty: cssStyleEnum.fontFamily,
    value: "Monterra"
  };
  let backgroundColor: ICssStyles = {
    styleTag: "background-color",
    pmStyleProperty: cssStyleEnum.backgroundColor,
    value: "rgba(38,1,89, 1)"
  };
  let horizontalAlign: ICssStyles = {
    styleTag: "text-align",
    pmStyleProperty: cssStyleEnum.horizontalAlignment,
    value: "textHorizontalAlignment.alignLeft"
  };
  let vertcalAlign: ICssStyles = {
    styleTag: "justify-content",
    pmStyleProperty: cssStyleEnum.verticalAlignment,
    value: "textVerticalAlignment.alignTop"
  };
  textElements.push(fontFamily);
  textElements.push(fontSize);
  textElements.push(color);
  textElements.push(backgroundColor);
  textElements.push(horizontalAlign);
  textElements.push(vertcalAlign);

  return textElements;
};
