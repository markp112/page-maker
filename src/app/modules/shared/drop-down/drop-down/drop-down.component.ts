import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ListItem, IListItem } from 'src/app/modules/shared/drop-down/drop-down/models/model';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss']
})
export class DropDownComponent implements OnInit {

  @Input() listItems: IListItem [];
  @Output () onItemSelected: EventEmitter<IListItem> = new EventEmitter();

  isDropDownExpanded: boolean = false;
  selectedValue: string;

  constructor() { }

  ngOnInit() {
  }

  expandDropDown() {
    this.isDropDownExpanded = !this.isDropDownExpanded;
  }

  onListItemClicked(event: number): void {
    this.clearSelectedItem(event);
    let selectedItem:IListItem = this.listItems.filter(item => {
      return (item.id === event) ;
    })[0]

    this.selectedValue = selectedItem.listItem;
    this.isDropDownExpanded = !this.isDropDownExpanded;
    this.onItemSelected.emit(selectedItem);
  }

  clearSelectedItem(selectedId: number) {
    this.listItems = this.listItems.map(item => {
      item.id === selectedId  ? item.isSelected =true : item.isSelected=false;
      return item;
    }

      );
  }
}
