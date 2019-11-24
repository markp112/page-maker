
import { ICssStyles } from "src/app/models/interfaces/cssStyle";
import { cssStyleEnum } from 'src/app/models/enums/cssStylesEnum';

export const initImageStylesInitial = (): ICssStyles[] => {
  let styles: ICssStyles[] = [];
  let backgroundColor: ICssStyles = {"styleTag": "background-color", pmStyleProperty:cssStyleEnum.backgroundColor, value: "rgba(241,242,244,1)"}
  let url:  ICssStyles = {"styleTag": "url", pmStyleProperty:cssStyleEnum.url, value: "../../../../assets/images/placeholder-image.png"}
  let height: ICssStyles = {
    styleTag: "height",
    pmStyleProperty: cssStyleEnum.height,
    value: "700"
  };
  let width: ICssStyles = {
    styleTag: "width",
    pmStyleProperty: cssStyleEnum.width,
    value: "650"
  };
  let top: ICssStyles = {styleTag: "top", pmStyleProperty: cssStyleEnum.top, value: "0"};
  let left: ICssStyles = {
    styleTag: "left",
    pmStyleProperty: cssStyleEnum.left,
    value: "0"
  };
  styles.push(height);
  styles.push(width);
  styles.push(top);
  styles.push(left);
  styles.push(backgroundColor);
  styles.push(url);
  return styles;
};
