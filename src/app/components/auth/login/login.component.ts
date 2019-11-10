import { Component, OnInit } from '@angular/core';
import { IUser } from '../../../models/interfaces/user';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: IUser ={email: null, password: null, id: null};

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  handleSignIn(){
    console.log(this.user.email)
    this.auth.signInRegular(this.user)
  }
}
