import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, } from 'angularfire2/firestore'
import { IPage, pageTemplates } from '../models/interfaces/page'
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';


// Service to support reading and writing of data to Firebase

@Injectable({
  providedIn: "root"
})
export class PageTemplateService {
  private dbPath = "/pages";
  itemCollection: AngularFirestoreCollection<IPage>;
  items: Observable<IPage[]>;

  result: { result: boolean; msg: string } = { result: false, msg: "" };

  pagesRef: AngularFirestoreCollection<IPage>;

  constructor(private afs: AngularFirestore, private auth: AuthService) {
    this.pagesRef = this.afs.collection<IPage>("pages");
  }

  getUid(): string {
    if (this.auth.isLoggedIn) {
      return this.auth.getUserID();
    } else return null;
  }

  // write a template record to fireStore
  addRecord(pageRecord: IPage): Promise<any> {
    return new Promise((resolve, reject) => {
      pageRecord.uid = this.getUid();
      if (pageRecord.uid) {
        this.pagesRef
          .add(pageRecord)
          .then(res => {
            this.result.result = true;
            this.result.msg = res.id;
            resolve(this.result);
          })
          .catch(err => {
            console.log(err);
            this.result.result = false;
            this.result.msg = err;
            reject(this.result);
          });
      } else {
        this.result.result = false;
        this.result.msg = "Not logged in";
        reject(this.result);
      }
    });
  }

  getRecord(template: pageTemplates):Observable<any>{
    const uid = this.getUid();
    return this.afs.collection<IPage>('pages', (ref => ref.where("uid","==",uid)
        .where("template","==",template)
        .limit(1))).valueChanges();
  }

  updateRecord(pageRecord: IPage):Promise<any> {

    return new Promise((resolve,reject) =>{

      console.log("uid=", pageRecord.uid);
      const coll = this.afs.collection ('pages').doc(pageRecord.uid);
      coll.set(pageRecord)
      .then(res =>{
        this.result.result=true;
        this.result.msg="Record updated";
        resolve(this.result);
      })
      .catch (err =>{
        this.result.result = false;
        this.result.msg = err;
        reject(this.result);

      })


    })
  }
}
