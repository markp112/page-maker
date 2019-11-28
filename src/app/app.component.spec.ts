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
        UrlInputComponent

      ],
      imports: [FontAwesomeModule, AppRoutingModule, FormsModule]
    });
    component.initialise();
  });
  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
