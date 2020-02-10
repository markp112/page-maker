import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { IIconButton, SelectList } from '@app/models/interfaces/icon-button';
import { ButtonBuilder } from '@app/models/classes/builders/button-builder/butonBuilder';
import { IListItem } from '../../drop-down/drop-down/models/model';

@Component({
  selector: 'app-font',
  templateUrl: './font.component.html',
  styleUrls: ['./font.component.scss']
})
export class FontComponent implements OnInit {

  @Output() fontSelected: EventEmitter<string> = new EventEmitter();
  @Output() fontSizeChanged: EventEmitter<IListItem> = new EventEmitter();

  fontSelector: IIconButton;
  fontSizeSelector: SelectList;
  isShowFontPicker: boolean;

  constructor() { }

  ngOnInit() {
    this.fontSelector = ButtonBuilder.fontSelectionButton();
    this.fontSizeSelector = ButtonBuilder.selectList(this.createFontSizes());
  }


  private createFontSizes(): IListItem[] {
    let listItems: IListItem[] = [];
    let id:number = 0;
    for (let fontSize = 6; fontSize < 74; fontSize +=2){
      let fontItem:IListItem = {
        id: id,
        isSelected: fontSize === 16 ? true : false,
        listItem: fontSize.toString(),
      }
      listItems.push(fontItem);
      id++;
    }
    return listItems;
  }

  clickEventHandler(event){
    this.isShowFontPicker = !this.isShowFontPicker;
  }
  handleSelectFont(event) {
    const fontName: string = event;
    this.fontSelected.emit(fontName);
    this.isShowFontPicker = !this.isShowFontPicker;
  }
  onItemSelected(event){
    const selectedItem:IListItem = event;
    console.log('%c%s', 'color: #00e600',selectedItem,"called font size change" );
    this.fontSizeChanged.emit(selectedItem);
  }
}
