import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '../../../models/interfaces/user';
import { AuthService } from 'src/app/shared/auth.service';
import { IStatusMessage, messageTypes } from "../../../models/interfaces/status-message";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  user: IUser = { email: null, password: null, id: null };
  statusMessage: IStatusMessage = {
    message: "",
    messageType: messageTypes.warning
  };
  isShowStatus: boolean = false;

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {}

  handleSignIn() {
    console.log(this.user.email);
    this.auth
      .signInRegular(this.user)
      .then(result => {
        if (this.auth.isLoggedIn) {
          this.router.navigate(["template"]);
        }
      })
      .catch(err => {
        this.statusMessage.messageType = messageTypes.error;
        this.statusMessage.message = err.message;
        this.isShowStatus = true;
      });
  }
}
