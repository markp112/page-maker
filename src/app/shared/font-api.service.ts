import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IGooglefont } from 'src/app/models/interfaces/google-font-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class FontApiService {
  apiUrl: string = "https://www.googleapis.com/webfonts/v1/webfonts";

 

  public currentPage: number;
  public pageSize: number;

  public getFonts(): Observable<any> {
    return this.httpClient.get<IGooglefont>(`${this.apiUrl}${this.key}`);
  }
  public getFontNames;
  constructor(private httpClient: HttpClient) {}
}
