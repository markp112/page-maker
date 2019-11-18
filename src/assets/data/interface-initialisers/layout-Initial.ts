import { ILayout } from 'src/app/models/interfaces/layout';
import { HtmlTags } from 'src/app/models/enums/htmlTags';

export const layoutInitial:ILayout = {
    htmlTag:HtmlTags.empty,
    cssClass: "",
    styles: [],
    children:[]
}

export const layoutSqImgText:ILayout = {
        cssClass: `.text-area {
                      grid-area: text-area;
                      width: 500px;
                      height: 400px;
                      padding: $content-spacing;}`,
        htmlTag: HtmlTags.div,
        
    
}