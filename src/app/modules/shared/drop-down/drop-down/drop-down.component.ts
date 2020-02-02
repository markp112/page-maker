import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ListItem, IListItem } from 'src/app/modules/shared/drop-down/drop-down/models/model';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss']
})
export class DropDownComponent implements OnInit {

  @Input() listItems: IListItem [];
  @Output () selectedItem: EventEmitter<IListItem> = new EventEmitter();

  isDropDownExpanded: boolean = false;
  selectedValue: string;

  constructor() { }

  ngOnInit() {
  }

  expandDropDown() {
    console.log("called")
    this.isDropDownExpanded = !this.isDropDownExpanded;
  }

  onListItemClicked(event: number): void {
    let selectedItem:IListItem =this.listItems.filter(item => {
      return (item.id === event) ;
    })[0]
    this.selectedValue = selectedItem.listItem;
    this.isDropDownExpanded = !this.isDropDownExpanded;
    this.selectedItem.emit(selectedItem);
  }
}
