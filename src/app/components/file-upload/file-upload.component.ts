import { Component, OnInit, Input } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage'


@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
@Input() path: string;
ref: AngularFireStorageReference;
task: AngularFireUploadTask;


  constructor(private afStorage : AngularFireStorage) { }

  ngOnInit() {
  }

  handleInputChange(event){
    console.log("event=",event.target.files[0])
    let file = event.target.files[0];
    if (file === undefined){
      return
    }
    let id =Math.random().toString(36).substring(2);
    this.ref = this.afStorage.ref(id);
    this.task = this.ref.put(file);
    
  }
}
