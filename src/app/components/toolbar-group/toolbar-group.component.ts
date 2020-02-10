import { Component, OnInit, Input, Output,  EventEmitter  } from '@angular/core';
import { IIconButton, SelectList } from "../../models/interfaces/icon-button";
import { IListItem } from '@app/modules/shared/drop-down/drop-down/models/model';
import { styles } from '@app/models/enums/icon-buton-styles.enum';
import { ButtonEventEnums } from '@app/models/enums/ButtonEventEnums';

@Component({
  selector: "app-toolbar-group",
  templateUrl: "./toolbar-group.component.html",
  styleUrls: ["./toolbar-group.component.scss"]
})
export class ToolbarGroupComponent implements OnInit {
  @Input() buttons: Array<IIconButton>;
  @Output() clickEvent: EventEmitter<string> = new EventEmitter();


  onItemSelected(event: IListItem) {

  }
  constructor() {}

  ngOnInit(

    ) {console.log("buttons==>",this.buttons)}

    clickEventHandler(event:string){
      this.clickEvent.emit(event);
    }
  checkType(button:IIconButton | SelectList): boolean {
    return button.eventName.eventName === ButtonEventEnums.ChangeFontSize ? false : true;
  }
}
