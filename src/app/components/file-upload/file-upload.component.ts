import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})

export class FileUploadComponent implements OnInit {
@Input() path:string;
@Output() handleFileUploadComplete = new EventEmitter;

ref: AngularFireStorageReference;
task: AngularFireUploadTask;
store: AngularFireStorage;

uploadProgress: Observable<number>;
downloadUrl: Observable<string>;

  constructor(private afStorage : AngularFireStorage) { }

  ngOnInit() {
  }

  handleInputChange(event){

    let file = event.target.files[0];
    if (file === undefined){
      return
    }
    console.log(file);
    const filename = `${this.path}${file.name}`

    this.ref = this.afStorage.ref(filename);
    this.task = this.ref.put(file);
    this.uploadProgress = this.task.percentageChanges();

    this.task.then(result => {
      this.downloadUrl = this.ref.child(filename).getDownloadURL();
      console.log(this.downloadUrl)
    })



    //this.ref.child(filename).refFromURL().then(url => console.log(url));
      //this.handleFileUploadComplete(filename)



  }
}
