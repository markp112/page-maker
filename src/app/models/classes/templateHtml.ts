import { HtmlTags } from '../enums/htmlTags';
import { ILayout, IImageLayout, ITextLayout } from '../interfaces/layout';
import { Content } from '@angular/compiler/src/render3/r3_ast';

export class PageHtml {
    _pageTitle: string; // title for the top of the page
    _javaScript: string[]; //links for js files
    _cssLinks: string[]; //links to css files
    _bodyContent: string;

    constructor(pageTitle: string, javaScript: string[], cssLinks:string[], bodyContent:string){
        this._pageTitle = pageTitle;
        this._javaScript = javaScript;
        this._cssLinks = cssLinks;
    }

    private docHead: string = `<!DOCTYPE html><html lang="en">`;
    private pageHead: string = `<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="X-UA-Compatible" content="ie=edge"><title>${this._pageTitle}</title></head>`;
    private bodyStart: string  = `<body>`;
    private bodyEnd: string = `</body>`;
    private closingTag: string = `</html>`;

    //extract the html tags from the page layout along with the content and construct the html
    //for the page
    buildHtml(pageLayout: ILayout){
        let tag: string;
        let closingTag:string;
        // At present only expecting div for the page master layout
        switch (pageLayout.htmlTag) {
            case HtmlTags.div:
                tag = '<div';
                if(pageLayout.className) tag +=` class="${pageLayout.className}"`;
                tag += '>';
                closingTag = '</div>';
                break;
        }
        let content: string = this.processChildElements(pageLayout.children)
        tag += content + closingTag;

    }

    private isTextStyle(styleLayout: ILayout | IImageLayout | ITextLayout): styleLayout is ITextLayout {
      return (styleLayout as ITextLayout).textStyles !== undefined;
    }

    private isImageStyle(styleLayout: ILayout | IImageLayout | ITextLayout): styleLayout is IImageLayout {
      return (styleLayout as IImageLayout).imageStyles !== undefined;
    }

    private processChildElements(childElements: ILayout[]): string {
        let content: string;

        childElements.forEach(element => {
            if(this.isTextStyle(element)){
              content += this.processTextElement(element)
            }
            if(this.isImageStyle(element)){
              content += this.processImageElement(element)
            }
            if(element.children.length > 0) content += this.processChildElements(element.children);
        });
        return content;
    }

    private processTextElement(element: ITextLayout): string {
      let content: string;
      return content;
    }

    private processImageElement(element: IImageLayout): string {
      let content: string;
      return content;
    }
}
