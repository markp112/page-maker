import { Component, OnInit } from '@angular/core';
import { faLanguage, faBars  } from "@fortawesome/free-solid-svg-icons";
import { AuthService } from '../../shared/auth.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  faLanguage = faLanguage;
  faBars = faBars;
  isLoggedIn: boolean = this.auth.isLoggedIn();
  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

}
