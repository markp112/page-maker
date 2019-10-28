import { Component, OnInit, Input, Output,  EventEmitter  } from '@angular/core';
import { IIconButton } from "../../models/interfaces/icon-button-interface";


@Component({
  selector: "app-toolbar-group",
  templateUrl: "./toolbar-group.component.html",
  styleUrls: ["./toolbar-group.component.scss"]
})
export class ToolbarGroupComponent implements OnInit {
  @Input() buttons: Array<IIconButton>;
  @Output() clickEvent: EventEmitter<string> = new EventEmitter();

  clickEventHandler(event:string){
    this.clickEvent.emit(event);
  }

  constructor() {}

  ngOnInit() {}
}
