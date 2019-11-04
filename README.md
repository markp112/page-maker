# PageMaker

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.2.

# Introduction

Work was started on this project less than a week after being first introduced to Angular. This is a personal project with the goal being to build a tool that allows the user to create a web page. The initial development of the project centers around a single template which the user can edit, to add text and an image.

## Editing Text

The application allows the user to type in text into a predefined area of the template, align the text both horizontally and vertically, choose a font from the 900+ google fonts, increase /decrease font sze and change both the background and foreground colours.

This section is fully operational as of 4 November 2019.

## Edting an Image

This section is work in progress the user, should be able to upload an image /paste in a URL and have that image displayed withn the image area of the template. The images will be stored on "server" at present it is planned to use google Firebase Storage.

## Saving Content

Once the user is happy with both the text and image they should be able to save this content including all of the settings and retireve this the next time they use the tool. This content will need to be saved to a database it is planned to use Firebase for this.

## Creating a Web Page

Once the content has been created the user should have an option to publish this content - the application should create a static web page including links to Google fonts, with there content displayed and formatted as per the editior.

## Planned longer term development

1) Create additional templates including Nav bars, side panels page layouts, allow the user to link this content together to build a simple web site, which they could maintain over time.

2) provide a means to publish the web site to one of the cloud platforms either AWS or Google. 

## Learning objectives

The primary learning objective of this application is to learn how to build an application in Angular JS as well as learning Angular itself. 

The project also reinforces learning undertaken around using API's and will make use of NOSQL databases and cloud storage.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
