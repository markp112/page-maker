import { Component, OnInit } from '@angular/core';
import { IUser } from '../../../models/interfaces/user';
import { AuthService } from 'src/app/shared/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent implements OnInit {
  user: IUser = {email: null, password: null, id: null};

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

handleSignUp(){
  this.auth.signUp(this.user)
  .then (result => {
    this.router.navigate(['template'])
  })

}

}
