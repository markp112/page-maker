import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IIconButton } from 'src/app/models/interfaces/icon-button-interface';
import { ButtonBuilder } from 'src/app/models/classes/builders/button-builder/butonBuilder';

@Component({
  selector: "app-url-input",
  templateUrl: "./url-input.component.html",
  styleUrls: ["./url-input.component.scss"]
})
export class UrlInputComponent implements OnInit {
  @Output() url = new EventEmitter();
  @Output() handleCancelClicked = new EventEmitter();

  cancelButton: IIconButton = ButtonBuilder.cancelButton();

  constructor() {}

  ngOnInit() {}

  handleOkClick(url) {
    if (url) {
      this.url.emit(url);
    }
  }

  handleCloseClick() {
    this.handleCancelClicked.emit();
  }
}
