import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, } from 'angularfire2/firestore'
import { IPage } from '../models/interfaces/page'
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class SavePageService {

  private dbPath = '/pages';

  result:{result:boolean, msg:string} = {result:false, msg:""};

  pagesRef: AngularFirestoreCollection<IPage>;

  constructor(private afs: AngularFirestore, private auth: AuthService ) {
    this.pagesRef = this.afs.collection<IPage>('pages');
  }


  addRecord(pageRecord: IPage):Promise<any>{
    return new Promise((resolve, reject)=>{
      if(this.auth.isLoggedIn){
        pageRecord.uid = this.auth.getUserID();
        this.pagesRef.add(pageRecord)
        .then (res => {
            this.result.result = true;
            this.result.msg = res.id;
            resolve(this.result);
        })
        .catch(err => {
          console.log(err);
          this.result.result = false;
          this.result.msg = err;
          reject (this.result);
        });

      } else {
        this.result.result = false;
        this.result.msg = "Not logged in";
        reject (this.result);
      }

  })

  }
}
