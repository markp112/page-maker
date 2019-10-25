import { Component, OnInit } from '@angular/core';
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: "app-icon-button",
  templateUrl: "./icon-button.component.html",
  styleUrls: ["./icon-button.component.scss"]
})
export class IconButtonComponent implements OnInit {
  iconButton = faAlignLeft;
  constructor() {}

  ngOnInit() {}
}
