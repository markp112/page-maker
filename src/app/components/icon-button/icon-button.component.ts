import { Component, OnInit, Input, Output,  EventEmitter  } from '@angular/core';
import { IIconButton } from "src/app/models/interfaces/icon-button-interface"
import { styles } from "src/app/models/enums/icon-buton-styles.enum"
import { IButtonEvent } from 'src/app/models/interfaces/button-event';


@Component({
  selector: "app-icon-button",
  templateUrl: "./icon-button.component.html",
  styleUrls: ["./icon-button.component.scss"]
})
export class IconButtonComponent implements OnInit {
  @Input() iconButton: IIconButton;
  @Output() clickEvent: EventEmitter<IButtonEvent> = new EventEmitter();

  styles = styles;

  showIcon: boolean = true;


  constructor() {}

  ngOnInit() {
    this.iconButton.style === styles.Icon
    ? (this.showIcon = true)
    : (this.showIcon = false);
  }

  buttonClick() {
    this.clickEvent.emit(this.iconButton.eventName);
  }
}
