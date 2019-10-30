import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IGooglefont, Item, Files } from 'src/app/models/interfaces/google-font-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class FontApiService {
  apiUrl: string = "https://www.googleapis.com/webfonts/v1/webfonts";
  key: string = "?key=AIzaSyAzEWVXP2Z_Ba8j2a2DlTvjTnKDk0XeNU8";
  // googleFonts: IGooglefont;

  public currentPage: number;
  public pageSize: number;

  public getFonts():Observable<any>{
    return this.httpClient.get<IGooglefont>(`${this.apiUrl}${this.key}`);
    
  }

  constructor(
    private httpClient: HttpClient,
    
  ) {}
}
