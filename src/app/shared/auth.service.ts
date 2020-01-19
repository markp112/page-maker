import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreCollection, } from 'angularfire2/firestore'
import { Router } from '@angular/router';
import { IUser } from '../models/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;
  private dbPath ='/users';

  usersRef: AngularFirestoreCollection<IUser>;
  user$: Observable<IUser[]>;

  constructor(private _firebaseAuth: AngularFireAuth, private afs: AngularFirestore, private router:Router) {
    this.user = _firebaseAuth.authState;
    this.user.subscribe(
      (user) => {
        if (user) {
        this.userDetails = user;
        } else {
        this.userDetails = null;
        }
      }
    );
    this.usersRef = this.afs.collection<IUser>('users');
  }

signUp(user : IUser):Promise<any>{
  return new Promise((resolve, reject)=>{
    this._firebaseAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
  .then(result => {

      resolve(true)
    })
  .catch(err => {
    reject (false);
    console.log(err)})
  })

}

signInRegular(user: IUser) {
 // const credential = firebase.auth.EmailAuthProvider.credential(email,password);
  return this._firebaseAuth.auth.signInWithEmailAndPassword(user.email, user.password);
}

isLoggedIn(): boolean {
  return this.userDetails === null ? false : true
}

logout(): void {
  this._firebaseAuth.auth.signOut()
  .then (res => this.router.navigate(['/']));
}

getUserID():string {
  if(this.isLoggedIn){
    return this.userDetails.uid;
  } else return "";
}
}
