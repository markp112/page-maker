import { TestComponent } from "@nology/angular-test-simplifier";
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { TextInputComponent } from "./components/text-input/text-input.component";
import { ComponentCardComponent } from "./components/component-card/component-card.component";
import { IconButtonComponent } from "./components/icon-button/icon-button.component";
import { ColorPickerWrapperComponent } from "./components/color-picker-wrapper/color-picker-wrapper.component";
import { NavComponent } from "./components/nav/nav.component";
import { TemplateSqImgTxtComponent } from "./components/templates/template-sq-img-txt/template-sq-img-txt.component";
import { ToolbarGroupComponent } from "./components/toolbar-group/toolbar-group.component";
import { FontDropDownComponent } from "./components/font-drop-down/font-drop-down.component";
import { UrlInputComponent } from "./components/url-input/url-input.component";
import { FileUploadComponent } from "./components/file-upload/file-upload.component";
import { LoginComponent } from "./components/auth/login/login.component";
import { WelcomeComponent } from "./components/welcome/welcome.component";
import { SignUpComponent } from "./components/auth/sign-up/sign-up.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { AppRoutingModule } from "./app-routing.module";
import { ColorPickerModule } from "./color-picker/color-picker.module";
import { StatusMessageComponent } from './components/status-message/status-message.component';
import { DropzoneDirective } from './directives/dropzone.directive';
import { ImageFormatterDirective } from './directives/image-formatter.directive';
import { TextFormatterDirectiveDirective } from './directives/text-formatter/text-formatter-directive.directive'
import { AngularFireModule } from 'angularfire2';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore'
import { AngularFireAuthModule } from 'angularfire2/auth'

import {secrets } from '../../secrets';

describe("AppComponent", () => {
  let component: TestComponent<AppComponent>;
  beforeEach(() => {
    component = new TestComponent<AppComponent>(AppComponent);
    component.configure({
      declarations: [
        AppComponent,
        ColorPickerWrapperComponent,
        ComponentCardComponent,
        FileUploadComponent,
        FontDropDownComponent,
        IconButtonComponent,
        LoginComponent,
        NavComponent,
        SignUpComponent,
        TemplateSqImgTxtComponent,
        ToolbarGroupComponent,
        WelcomeComponent,
        TextInputComponent,
        UrlInputComponent,
        StatusMessageComponent,
        DropzoneDirective,
        ImageFormatterDirective,
        TextFormatterDirectiveDirective

      ],
      imports: [FontAwesomeModule, AppRoutingModule, FormsModule, ColorPickerModule,
        AngularFireModule,AngularFireAuthModule,  AngularFireStorageModule,
        AngularFireDatabaseModule, AngularFirestoreModule.enablePersistence(),
        AngularFireModule.initializeApp({apiKey: secrets.google.webAPIKey,
        authDomain: secrets.google.authDomain,
        storageBucket: secrets.google.storageBucket,
        projectId: secrets.google.projectId,
        databaseURL: secrets.google.databaseURL,
        appId: secrets.google.appId,
        messagingSenderId: secrets.google.messagingSenderId
      }),
        ]
    });
    component.initialise();
  });
  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
