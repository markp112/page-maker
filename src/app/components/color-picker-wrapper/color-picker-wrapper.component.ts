import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-color-picker-wrapper',
  templateUrl: './color-picker-wrapper.component.html',
  styleUrls: ['./color-picker-wrapper.component.scss']
})
export class ColorPickerWrapperComponent implements OnInit {
  @Output() handleColorSelected = new EventEmitter
  constructor() { }

  ngOnInit() {
  }
  handleColorClickEvent(color: string) {
    this.handleColorSelected.emit(color);

  }

}
