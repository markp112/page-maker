import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ListItem } from 'src/app/modules/shared/drop-down/drop-down/models/model';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss']
})
export class DropDownComponent implements OnInit {

  @Input() listItems: ListItem;

  @Output () selectedItem: EventEmitter<number> = new EventEmitter();



  constructor() { }

  ngOnInit() {
  }

  onItemClicked(event: string): void {
    this.selectedItem.emit(parseInt(event));
  }
}
