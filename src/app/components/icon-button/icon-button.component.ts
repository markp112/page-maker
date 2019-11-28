import { Component, OnInit, Input, Output,  EventEmitter  } from '@angular/core';
// import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { IIconButton } from "src/app/models/interfaces/icon-button-interface"
import { styles } from "src/app/models/enums/icon-buton-styles.enum"


@Component({
  selector: "app-icon-button",
  templateUrl: "./icon-button.component.html",
  styleUrls: ["./icon-button.component.scss"]
})

export class IconButtonComponent implements OnInit {
  @Input() iconButton: IIconButton;
  @Output() clickEvent: EventEmitter<string> = new EventEmitter();

  styles = styles;

  showIcon: boolean = true;

  buttonClick() {
    this.clickEvent.emit(this.iconButton.eventName);
  }

  constructor() {}

  ngOnInit() {
    this.iconButton.style === styles.Icon? this.showIcon = true : this.showIcon = false;
  }
}
