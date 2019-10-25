import { Component, OnInit,ContentChildren } from '@angular/core';
import {  TextInputComponent } from "../text-input/text-input.component";

@Component({
  selector: "app-component-card",
  templateUrl: "./component-card.component.html",
  styleUrls: ["./component-card.component.scss"]
})
export class ComponentCardComponent implements OnInit {
  toolbar;
  component;
  constructor() {}

  ngOnInit() {}
}
