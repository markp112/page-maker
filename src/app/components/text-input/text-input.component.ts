import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-text-input",
  templateUrl: "./text-input.component.html",
  styleUrls: ["./text-input.component.scss"]
})
export class TextInputComponent implements OnInit {
  fawindowclose = faWindowClose;
  rows: number = 12;
  cols: number = 70;
  placeholder: string = "Enter text to appear on page";

  @Input() textContent: string="";
  @Output() closeEvent: EventEmitter<string> = new EventEmitter();
  @Output() textChangedEvent: EventEmitter<string> = new EventEmitter();

  closeClick() {
    this.closeEvent.emit("closeme");
  }

  contentChanged(content) {
    this.textChangedEvent.emit(content);
  }

  constructor() {}

  ngOnInit() {
  }
}
