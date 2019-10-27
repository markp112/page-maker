import { Component, OnInit,ContentChildren } from '@angular/core';
import { faAlignLeft, faAlignCenter, faAlignRight, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import {  TextInputComponent } from "../text-input/text-input.component";

@Component({
  selector: "app-component-card",
  templateUrl: "./component-card.component.html",
  styleUrls: ["./component-card.component.scss"]
})
export class ComponentCardComponent implements OnInit {
  toolbar;
  component;
  faAlignLeft = faAlignLeft;
  faAlignCenter = faAlignCenter;
  faAlignRight = faAlignRight;
  constructor() {}

  ngOnInit() {}
}
