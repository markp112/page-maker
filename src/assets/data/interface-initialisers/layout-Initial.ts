import { ILayout } from "src/app/models/interfaces/layout";
import { HtmlTags } from "src/app/models/enums/htmlTags";
import { ICssStyles } from 'src/app/models/interfaces/cssStyle';

export const layoutInitial: ILayout = {
    htmlTag: HtmlTags.empty,
    cssClass: "",
    styles: [],
    children: []
};


export const initLayoutSqImgText(): ILayout => {

    const layoutSqImgText: ILayout = {
        cssClass: `.text-area {
                    grid-area: text-area;
                    width: 500px;
                    height: 400px;
                    padding: 10px;
                    display: flex; 
                    flex-direction: column;}`,
        htmlTag: HtmlTags.div,
        styles: [],
        children: []
    };
let color :ICssStyles = { styleTag: "color", pmStyleProperty: "color" };
let fontSize:ICssStyles = { styleTag:"font-size", pmStyleProperty:"size" }
let fontFamily:ICssStyles = { styleTag: "font-family", pmStyleProperty: "font" };
let backgroundColor:ICssStyles = { styleTag: "background-color", pmStyleProperty:"backgroundColor" };
let horizontalAlign:ICssStyles = { styleTag: "text-align", pmStyleProperty:"horizontalAlignment" };
let vertcalAlign:ICssStyles = { styleTag: "justify-content", pmStyleProperty:"verticalAlignment" };

layoutSqImgText.styles.push(color);
layoutSqImgText.styles.push(fontSize);
layoutSqImgText.styles.push(fontFamily);
layoutSqImgText.styles.push(backgroundColor);
layoutSqImgText.styles.push(horizontalAlign);
layoutSqImgText.styles.push(vertcalAlign);

return layoutSqImgText;
}