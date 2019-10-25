import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements OnInit {

  constructor() { }
    rows = 12;
    cols = 70;
    placeholder ="Enter text to appear on page";

  ngOnInit() {
  }

}
