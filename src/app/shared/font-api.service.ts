import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IGooglefont } from 'src/app/models/interfaces/google-font-api';
import { Observable } from 'rxjs';
import { secrets } from 'secrets';

@Injectable({
  providedIn: "root"
})
export class FontApiService {
  apiUrl: string = "https://www.googleapis.com/webfonts/v1/webfonts";
  key: string = `?key=${secrets.google.fontsAPIKey}`;

  public currentPage: number;
  public pageSize: number;

  constructor(private httpClient: HttpClient) {}

  public getFonts(): Observable<any> {
    return this.httpClient.get<IGooglefont>(`${this.apiUrl}${this.key}`);
  }
  
  // retrieve a single font and make this available
  public getFont(fontFamily: string):Observable<any>{
    return this.httpClient.get<IGooglefont>(`${this.apiUrl}${this.key}&family=${fontFamily}`);
  }
}
