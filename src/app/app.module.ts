import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextInputComponent } from './components/text-input/text-input.component';
import { ComponentCardComponent } from './components/component-card/component-card.component';
import { IconButtonComponent } from './components/icon-button/icon-button.component';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { ColorPickerModule } from "./color-picker/color-picker.module";

@NgModule({
  declarations: [
    AppComponent,
    TextInputComponent,
    ComponentCardComponent,
    IconButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ColorPickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
