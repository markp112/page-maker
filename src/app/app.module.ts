import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextInputComponent } from './components/text-input/text-input.component';
import { ComponentCardComponent } from './components/component-card/component-card.component';
import { IconButtonComponent } from './components/icon-button/icon-button.component';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { ColorPickerModule } from "./color-picker/color-picker.module";
import { ColorPickerWrapperComponent } from './components/color-picker-wrapper/color-picker-wrapper.component';
import { NavComponent } from './components/nav/nav.component';
import { TemplateSqImgTxtComponent } from './components/templates/template-sq-img-txt/template-sq-img-txt.component';
import { ToolbarGroupComponent } from './components/toolbar-group/toolbar-group.component';
import { FontDropDownComponent } from './components/font-drop-down/font-drop-down.component';
import { FontApiService }  from './shared/font-api.service';
import { UrlInputComponent } from './components/url-input/url-input.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { secrets } from 'secrets';
import { DropzoneDirective } from './directives/dropzone.directive';
import { TextFormatterDirective } from './directives/text-formatter.directive';




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
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ColorPickerModule,
    HttpClientModule,
    AngularFireModule.initializeApp({
      apiKey: secrets.google.webAPIKey,
      authDomain: secrets.google.authDomain,
      storageBucket: secrets.google.storageBucket,
      projectId: secrets.google.projectId,
    }),
    AngularFireStorageModule
  ],
  providers: [FontApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
