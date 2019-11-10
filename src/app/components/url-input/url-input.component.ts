import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-url-input',
  templateUrl: './url-input.component.html',
  styleUrls: ['./url-input.component.scss']
})
export class UrlInputComponent implements OnInit {
  @Output() url = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleOkClick(url){
    if (url){
      this.url.emit(url);
    }

  }
}
