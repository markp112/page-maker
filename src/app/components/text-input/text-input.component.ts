import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: "app-text-input",
  templateUrl: "./text-input.component.html",
  styleUrls: ["./text-input.component.scss"]
})
export class TextInputComponent implements OnInit {

  rows:number = 12;
  cols:number = 70;
  placeholder:string = "Enter text to appear on page";
  content:string;

  @Output() closeEvent: EventEmitter<string> = new EventEmitter();
  @Output() textChangedEvent: EventEmitter<string> = new EventEmitter();

  closeClick() {
    this.closeEvent.emit("closeme");
  }

  constructor() {}


  ngOnInit() {}
}
