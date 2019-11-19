import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { ColorPickerModule } from "./color-picker/color-picker.module";
//components
import { TextInputComponent } from './components/text-input/text-input.component';
import { ComponentCardComponent } from './components/component-card/component-card.component';
import { IconButtonComponent } from './components/icon-button/icon-button.component';
import { ColorPickerWrapperComponent } from './components/color-picker-wrapper/color-picker-wrapper.component';
import { NavComponent } from './components/nav/nav.component';
import { TemplateSqImgTxtComponent } from './components/templates/template-sq-img-txt/template-sq-img-txt.component';
import { ToolbarGroupComponent } from './components/toolbar-group/toolbar-group.component';
import { FontDropDownComponent } from './components/font-drop-down/font-drop-down.component';
import { UrlInputComponent } from './components/url-input/url-input.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { LoginComponent } from './components/auth/login/login.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';

// Services
import { FontApiService }  from './shared/font-api.service';
import { AuthService } from './shared/auth.service';
import { PageTemplateService } from "./shared/page-template.service";
import { FireStorageService } from './shared/fire-storage.service';

// Vendor
import { AngularFireModule } from 'angularfire2';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore'
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth'
// directives
import { DropzoneDirective } from './directives/dropzone.directive';
import { TextFormatterDirective } from './directives/text-formatter.directive';
import { ImageFormatterDirective } from './directives/image-formatter.directive';

import { secrets } from 'secrets';
// import { messaging } from 'firebase';
import { StatusMessageComponent } from './components/status-message/status-message.component';


@NgModule({
  declarations: [
    AppComponent,
    TextInputComponent,
    ComponentCardComponent,
    IconButtonComponent,
    ColorPickerWrapperComponent,
    NavComponent,
    TemplateSqImgTxtComponent,
    ToolbarGroupComponent,
    FontDropDownComponent,
    UrlInputComponent,
    FileUploadComponent,
    DropzoneDirective,
    TextFormatterDirective,
    ImageFormatterDirective,
    LoginComponent,
    WelcomeComponent,
    SignUpComponent,
    StatusMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    ColorPickerModule,
    HttpClientModule,
    AngularFireModule.initializeApp({
      apiKey: secrets.google.webAPIKey,
      authDomain: secrets.google.authDomain,
      storageBucket: secrets.google.storageBucket,
      projectId: secrets.google.projectId,
      databaseURL: secrets.google.databaseURL,
      appId: secrets.google.appId,
      messagingSenderId: secrets.google.messagingSenderId
    }),
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule.enablePersistence()
  ],
  providers: [FontApiService, AuthService, PageTemplateService, FireStorageService],
  bootstrap: [AppComponent]
})
export class AppModule {}
