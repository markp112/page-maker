import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextContentService {

    private _theTextContent: string ="";

    constructor() { }

    public get textContent(): string {
      return this._theTextContent;
    }

    public set textContent(aTextString: string) {
      this._theTextContent = aTextString;
    }

  }


