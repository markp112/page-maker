import { Component, OnInit, Input } from '@angular/core';
import { IIconButton } from 'src/app/models/interfaces/icon-button-interface';
import { templateInitial } from 'src/assets/data/mock/template-toolbar';

@Component({
  selector: "app-template-sq-img-txt",
  templateUrl: "./template-sq-img-txt.component.html",
  styleUrls: ["./template-sq-img-txt.component.scss"]
})
export class TemplateSqImgTxtComponent implements OnInit {
  
  buttons: IIconButton[] = templateInitial;
  
  @Input() contentText:string;

  constructor() {}

  ngOnInit() {}
}
