import { HtmlTags } from '../enums/htmlTags';
import { ILayout, IImageLayout, ITextLayout } from '../interfaces/layout';
import { Content } from '@angular/compiler/src/render3/r3_ast';

export class HtmlBuilder {
    _pageTitle: string; // title for the top of the page
    _javaScript: string[]; //links for js files
    _cssLinks: string[]; //links to css files
    _bodyContent: string;

    constructor(pageTitle: string){
        this._pageTitle = pageTitle;
    }

    private docHead: string = `<!DOCTYPE html><html lang="en">`;
    private pageHead: string = `<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="X-UA-Compatible" content="ie=edge"><title>${this._pageTitle}</title></head>`;
    private bodyStart: string  = `<body>`;
    private bodyEnd: string = `</body>`;
    private closingTag: string = `</html>`;

    //extract the html tags from the page layout along with the content and construct the html
    //for the page
    buildHtml(pageLayout: ILayout): string {
        let tag: string;
        let page: string;
        // At present only expecting div for the page master layout
        tag = this.getTagAsHtml(pageLayout.htmlTag, pageLayout.className, false);
        tag += '>'  // close out the tag as not expecting this to be a tag needing additional attributes
        let content: string = this.processChildElements(pageLayout.children)
        tag += content + this.getTagAsHtml(pageLayout.htmlTag, '', true);
        page = `${this.docHead}${this.pageHead}${this.bodyStart}$`

        return page
    }
    // insert links to CSS file
    createStyleSheetLinks(cssFileName: string): string {
      let link: string;
      link =`<link
          rel="stylesheet"
          type="text/css"
          media="screen"
          href="${cssFileName}"
        />`;
      return link;
    }

    private isTextStyle(styleLayout: ILayout | IImageLayout | ITextLayout): styleLayout is ITextLayout {
      return (styleLayout as ITextLayout).textStyles !== undefined;
    }

    private isImageStyle(styleLayout: ILayout | IImageLayout | ITextLayout): styleLayout is IImageLayout {
      return (styleLayout as IImageLayout).imageStyles !== undefined;
    }

    // based on the enum for the Html tag convert this into actual 
    // html tag with the tag left open so other attributes can be added if needed
    private getTagAsHtml(tag: HtmlTags, className: string, isClosingTag:boolean): string {
      let htmlElement: string;
      if(isClosingTag) htmlElement = "</"; else htmlElement = "<";
      switch (tag) {
            case HtmlTags.div:
              htmlElement += 'div';
              break;
            case HtmlTags.img:
              htmlElement += 'img'
              break;
            case HtmlTags.section:
              htmlElement += 'section'
              break;
            default:
              htmlElement = "";
        }
        if(className) htmlElement +=` class="${className}"`;
        return htmlElement;
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
      content = this.getTagAsHtml(element.htmlTag, element.className, false);
      content += '>'
      content += element.textStyles[content];
      content += this.getTagAsHtml(element.htmlTag, element.className, true);
      return content;
    }

    private processImageElement(element: IImageLayout): string {
      let content: string;
      content = this.getTagAsHtml(element.htmlTag, element.className, false);
      if(element.htmlTag === HtmlTags.img) {
        content += element.imageStyles.url;
      }
      content += '>'
      content = this.getTagAsHtml(element.htmlTag, element.className, true);
      return content;
    }
}
