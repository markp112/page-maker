import { HtmlTagsEnum } from '../enums/htmlTags';
import { ILayout } from '../interfaces/layout';
import { cssStyleEnum } from '../enums/cssStylesEnum';
import { ICssStyles } from '../interfaces/cssStyle';


export class HtmlBuilder {
    private _pageTitle: string; // title for the top of the page

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
   public buildHtml(pageLayout: ILayout, cssFileName: string): Promise<any> {
        let page: string;
        return new Promise ((resolve, reject)=>{
          try {
            let cssLink: string = this.createStyleSheetLinks(cssFileName);
            let pageTitle: string = `<title>${this._pageTitle}</title>`;
            let fontLinks: string = this.getFontLinks(pageLayout);
            let pageHtmlContent = this.getHTMLforPage(pageLayout);
            page = `${this.docHead}${this.pageHead}${pageTitle}${cssLink}${fontLinks}</head>`;
            page += `${this.bodyStart}${pageHtmlContent}${this.bodyEnd}${this.closingTag}`;
            resolve(page);
          } catch (error) {
            reject(error);
          }
        })
    }
    // insert links to CSS file
    private createStyleSheetLinks(cssFileName: string): string {
      let link: string;
      link =`<link
          rel="stylesheet"
          type="text/css"
          media="screen"
          href="${cssFileName}"
        />`;
      return link;
    }

    private getTag(htmlTag: HtmlTagsEnum): string{
        switch (htmlTag) {
        case HtmlTagsEnum.section:
          return 'section';
        case HtmlTagsEnum.div:
            return 'div';
        case HtmlTagsEnum.img:
            return 'img';
        default:
          return "";
      }
    }

    private getHtmlTagOpen (htmlTag: HtmlTagsEnum): string {
      return `<${this.getTag(htmlTag)}`;
    }

    private getHtmlTagClose (htmlTag: HtmlTagsEnum): string {
      return `</${this.getTag(htmlTag)}>`;
    }

    private getImageTagUrlFromStyles(styles: ICssStyles[]): string {
      return ` src="${styles.filter(style => style.pmStyleProperty === cssStyleEnum.url)[0].value}"`
    }

    private getHTMLforPage(layout: ILayout): string {
      let html: string = "";
      html = this.getHtmlTagOpen(layout.htmlTag);
      if(layout.className !== "") html += ` class="${layout.className}"`;
      if(layout.htmlTag === HtmlTagsEnum.img) html += this.getImageTagUrlFromStyles(layout.styles);
      html += ">"
      if(layout.content !== "") html += layout.content;
      layout.children.forEach(layout => html += this.getHTMLforPage(layout));
      html += this.getHtmlTagClose(layout.htmlTag);
      return html;
    }

    private getFontLinks(layout: ILayout): string {
      let fontName: string;
      let fontLink: string = '';
      if(layout.styles.length === 0) return fontLink;
      fontName = layout.styles.filter(style => style.pmStyleProperty === cssStyleEnum.fontFamily)[0].value
      if (fontName !== '') fontLink =`<link href="https://fonts.googleapis.com/css?family=${fontName}&display=swap" rel="stylesheet">`
      layout.children.forEach(layout => fontLink += this.getFontLinks(layout));
      return fontLink;
    }
  }
