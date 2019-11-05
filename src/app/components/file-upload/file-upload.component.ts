import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: "app-file-upload",
  templateUrl: "./file-upload.component.html",
  styleUrls: ["./file-upload.component.scss"]
})
export class FileUploadComponent implements OnInit {
  @Input() path: string;
  @Output() handleFileUploadComplete = new EventEmitter();

  uploadProgress: Observable<number>;
  downloadUrl: Observable<string>;

  constructor(private afStorage: AngularFireStorage) {}

  ngOnInit() {}

  // Main task
  task: AngularFireUploadTask;
  ref: AngularFireStorageReference;

  // Progress monitoring
  percentage: Observable<number>;

  snapshot: Observable<any>;

  // Download URL
  downloadURL: Observable<string>;

  // State for dropzone CSS toggling
  isHovering: boolean;

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  startUpload(event: FileList) {
    // The File object
    const file = event.item(0);

    // Client-side validation example
    if (file.type.split("/")[0] !== "image") {
      console.error("unsupported file type :( ");
      return;
    }

    // The storage path
    const path = `${this.path}/${file.name}`;

    // Totally optional metadata
    const customMetadata = { app: "My AngularFire-powered PWA!" };

    this.ref = this.afStorage.ref(path);
    // The main task
    this.task = this.afStorage.upload(path, file, { customMetadata });

    // Progress monitoring
    this.percentage = this.task.percentageChanges();
    this.snapshot = this.task.snapshotChanges().pipe(
      tap(snap =>{
        if (snap.bytesTransferred === snap.totalBytes) {
          this.downloadUrl = this.ref.getDownloadURL();
          this.downloadUrl.subscribe(url => {
              this.handleFileUploadComplete.emit(url);
            })
        }
      })
    );
  }

  // Determines if the upload task is active
  isActive(snapshot) {
    return (
      snapshot.state === "running" &&
      snapshot.bytesTransferred < snapshot.totalBytes
    );
  }
}
