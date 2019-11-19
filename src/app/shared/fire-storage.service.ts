import { Injectable } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IStatusMessage, messageTypes } from '../models/interfaces/status-message';

@Injectable({
  providedIn: 'root'
})
export class FireStorageService {


  constructor(private afStorage: AngularFireStorage) { }

  private task: AngularFireUploadTask;
  private ref: AngularFireStorageReference;
  private snapshot: Observable<any>;

  writeNewFile(filename: string, folder: string, fileContent: string):Promise<IStatusMessage> {


    let bucket:string = `${folder}/${filename}`;
    return new Promise((resolve, reject) => {
      this.ref = this.afStorage.ref(bucket);
      this.task = this.ref.putString(fileContent);
      this.task.then ( result=>{

        if (result.state ==="success") {
          let message: IStatusMessage = {message:"File uploaded", messageType: messageTypes.information};
          resolve (message);
        } else {
          let message: IStatusMessage = {message:"File uploaded - Failed", messageType: messageTypes.error};
          reject(message);
        }
      })
      .catch(err => {
        let message: IStatusMessage = {message:`Failed: ${err}`, messageType: messageTypes.error};
        reject(message);
      })

    })

  }

}
