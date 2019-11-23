import { HtmlTags } from '../enums/htmlTags';
import { ILayout } from '../interfaces/layout';
import { Content } from '@angular/compiler/src/render3/r3_ast';

export class HtmlBuilder {
    _pageTitle: string; // title for the top of the page


    constructor(pageTitle: string){
        this._pageTitle = pageTitle;
    }

    private docHead: string = `<!DOCTYPE html><html lang="en">`;
    private pageHead: string = `<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="X-UA-Compatible" content="ie=edge">`;
    private bodyStart: string  = `<body>`;
    private bodyEnd: string = `</body>`;
    private closingTag: string = `</html>`;

    //extract the html tags from the page layout along with the content and construct the html
    //for the page
    buildHtml(pageLayout: ILayout, cssFileName: string): Promise<any> {
        let tag: string;
        let page: string;
        return new Promise ((resolve, reject)=>{
          try {
            let cssLink: string = this.createStyleSheetLinks(cssFileName);
            let pageTitle: string = `<title>${this._pageTitle}</title>`;
            let fontLinks: string = this.getFontLinks(pageLayout);

            // At present only expecting div for the page master layout
            tag = this.getTagAsHtml(pageLayout.htmlTag, pageLayout.className, false);
            tag += '>'  // close out the tag as not expecting this to be a tag needing additional attributes
            let content: string = this.processChildElements(pageLayout.children)
            tag += content + this.getTagAsHtml(pageLayout.htmlTag, '', true);
            tag += '>'
            page = `${this.docHead}${this.pageHead}${pageTitle}${cssLink}${fontLinks}</head>`;
            page += `${this.bodyStart}${tag}${this.bodyEnd}${this.closingTag}`;
            resolve(page);
          } catch (error) {
            reject(error);
          }
        })

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

     // based on the enum for the Html tag convert this into actual
    // html tag with the tag left open so other attributes can be added if needed
    private getTagAsHtml(tag: HtmlTags, className: string, isClosingTag: boolean): string {
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
    private getFontLinks(layout: ILayout): string {
      let fontName: string;
      let fontLink: string = '';
      if(layout.styles["font"] !== '') {
          fontName = layout.styles["font"];
          fontLink =`<link href="https://fonts.googleapis.com/css?family=${fontName}&display=swap" rel="stylesheet">`
      }
      fontLink += this.processChildFonts(layout.children);
      return fontLink;
    }

    private processChildFonts(layout: ILayout[]): string {
      let fontName: string = '';
      let fontLink: string = '';
      // layout.forEach(element =>{

          // if(element.textStyles["font"] !== ''){
          //   fontName = element.textStyles["font"];
          //   fontLink +=`<link href="https://fonts.googleapis.com/css?family=${fontName}&display=swap" rel="stylesheet">`
          // }
        // }
        // if(element.children.length > 0) fontLink += this.processChildFonts(element.children);
      // })
      // return fontLink;
      return ""
    }

    private processChildElements(childElements: ILayout[]): string {
        let content: string='';
        // childElements.forEach(element => {
        //     if(this.isTextStyle(element)){
        //       content += this.processTextElement(element)
        //     }
        //     if(this.isImageStyle(element)){
        //       content += this.processImageElement(element)
        //     }
        //     if(element.children.length > 0) content += this.processChildElements(element.children);
        // });
        return content;
    }

    private processTextElement(element: ILayout): string {
      let content: string;
      content = this.getTagAsHtml(element.htmlTag, element.className, false);
      content += '>'
      // content += element.textStyles["content"];
      content += this.getTagAsHtml(element.htmlTag, '', true);
      content += '>'
      return content;
    }

    private processImageElement(element: ILayout): string {
    console.log("TCL: HtmlBuilder -> element", element)
      let content: string = '';
      content += this.getTagAsHtml(element.htmlTag, element.className, false);
      // if(element.htmlTag === HtmlTags.img) {
      //   content += element.imageStyles.url;
      // }
      // content += '>'
      content += this.getTagAsHtml(element.htmlTag, '', true);
      content += '>'
      return content;
    }
}
