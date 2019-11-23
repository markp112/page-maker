import { IImage } from "../../../app/models/interfaces/image";
import { ICssStyles } from "src/app/models/interfaces/cssStyle";
// export const imageInitial: IImage = {
//   container: `grid-area: image-area;
//               width: 100%;
//               height: 100%;
//               display: flex;
//               flex-direction: column;
//               justify-content: flex-start;
//               align-items: center;
//               position: relative;
//               overflow: hidden;`,
//   url: "../../../../assets/images/placeholder-image.png",
//   position: {
//     top: 0,
//     left: 0
//   },
//   height: 400,
//   width: 500,
//   backgroundColor: "rgba(241,242,244,1)"
// };

export const initImageStylesInitial = (): ICssStyles[] => {
  let styles: ICssStyles[] = [];
  let backgroundColor: ICssStyles = {"styleTag": "background-color", pmStyleProperty:"backgroundColor", value: "rgba(38,1,89, 1)"}
  let url:  ICssStyles = {"styleTag": "url", pmStyleProperty:"url", value: "../../../../assets/images/placeholder-image.png"}
  let height: ICssStyles = {
    styleTag: "height",
    pmStyleProperty: "height",
    value: "400"
  };
  let width: ICssStyles = {
    styleTag: "width",
    pmStyleProperty: "width",
    value: "500"
  };
  let top: ICssStyles = { styleTag: "top", pmStyleProperty: "top", value: "0" };
  let left: ICssStyles = {
    styleTag: "left",
    pmStyleProperty: "left",
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
