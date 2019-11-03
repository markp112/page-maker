import { Component, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss'],
})
export class ColorPickerComponent {
  @Output() handleColorSelectClick = new EventEmitter();

  public hue: string;
  public color: string;

handleOkClick(){
  event.stopPropagation();
  this.handleColorSelectClick.emit(this.color);
}
}
