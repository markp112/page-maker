export class html {
    _pageTitle: string; // title for the top of the page
    _javaScript: string[]; //links for js files
    _cssLinks: string[]; //links to css files
    _bodyContent: string;

    constructor(pageTitle: string, javaScript: string[], cssLinks:string[], bodyContent:string){
        this._pageTitle = pageTitle;
        this._javaScript = javaScript;
        this._cssLinks = cssLinks;
        this._bodyContent = bodyContent;
    }

    private docHead: string = `<!DOCTYPE html><html lang="en">`;
    private pageHead: string = `<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="X-UA-Compatible" content="ie=edge"><title>${this._pageTitle}</title></head>`;
    private bodyStart: string  = `<body>`;
    private bodyEnd: string = `</body>`;
    private closingTag: string = `</html>`;

}