import { Component, OnInit } from '@angular/core';
import { faLanguage, faBars, IconDefinition } from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  faLanguage = faLanguage;
  faBars = faBars;
  constructor() { }

  ngOnInit() {
  }

}
