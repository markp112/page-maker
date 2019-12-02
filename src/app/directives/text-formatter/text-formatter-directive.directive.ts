import { Directive, OnChanges, Input, SimpleChanges, Renderer2, ElementRef, Output, EventEmitter, SimpleChange } from '@angular/core';
import { ButtonEventEnums } from 'src/app/models/enums/ButtonEventEnums';
import { ICssStyles } from 'src/app/models/interfaces/cssStyle';
import { initTextStylesInitial } from 'src/assets/data/interface-initialisers/textInitial';
import { cssStyleEnum } from 'src/app/models/enums/cssStylesEnum';



@Directive({
  selector: '[appTextFormatterDirective]'
})
export class TextFormatterDirectiveDirective implements OnChanges {

  @Input() buttonEvent: ButtonEventEnums;
  @Input() changedValue: string;
  @Output() styles = new EventEmitter<ICssStyles[]>();

  private lastButtonClick: ButtonEventEnums;
  private isEditingText: boolean = false;
  private fontSize: ICssStyles;
  private fontFamily: ICssStyles;
  private foreColor: ICssStyles;
  private backgroundColor: ICssStyles;
  private verticalAlignment: ICssStyles;
  private horizontalAlignment: ICssStyles;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.foreColor = this.getStyleValue(
      initTextStylesInitial(),
      cssStyleEnum.color
    );
    this.backgroundColor = this.getStyleValue(
      initTextStylesInitial(),
      cssStyleEnum.backgroundColor
    );
    this.fontFamily = this.getStyleValue(
      initTextStylesInitial(),
      cssStyleEnum.fontFamily
    );
    this.fontSize = this.getStyleValue(
      initTextStylesInitial(),
      cssStyleEnum.fontSize
    );
    this.horizontalAlignment = this.getStyleValue(
      initTextStylesInitial(),
      cssStyleEnum.horizontalAlignment
    );
    this.verticalAlignment = this.getStyleValue(
      initTextStylesInitial(),
      cssStyleEnum.verticalAlignment
    );
  }


  ngOnChanges(changes: SimpleChanges) {
    console.log('chnages calleds%c⧭', 'color: #aa00ff', changes);
    let buttonClicked: ButtonEventEnums;
    if(changes.buttonEvent){
      buttonClicked = changes.buttonEvent.currentValue;
      this.lastButtonClick = buttonClicked;
    } else {
      buttonClicked = this.lastButtonClick;
    }
    this.respondToButtonClick(this.buttonEvent);

  }

  private respondToButtonClick(buttonClickedEvent: ButtonEventEnums) {
  console.log('%c%s', 'color: #d90000', buttonClickedEvent);

    switch (buttonClickedEvent) {
      // case ButtonEventEnums.AlignRight || ButtonEventEnums.AlignCenter || ButtonEventEnums.AlignRight
      //   || ButtonEventEnums.Justify || ButtonEventEnums.VerticalAlignBottom || ButtonEventEnums.VerticalAlignCenter
      //   || ButtonEventEnums.VerticalAlignTop:
      case ButtonEventEnums.VerticalAlignmentChanged:
        this.updateTextAlignment(buttonClickedEvent);
        break;
      case ButtonEventEnums.HorizontalAlignmentChanged:
        this.updateTextAlignment(buttonClickedEvent);
        break;
      case ButtonEventEnums.FontFamily:
        this.fontFamily.value = this.changedValue;
        this.updateElement('fontFamily', `${this.fontFamily.value}`);
        break;
      case ButtonEventEnums.IncreaseFontSize:
        this.fontSize.value = (parseInt(this.fontSize.value) + 1).toString();
        this.updateElement('fontSize', `${this.fontSize.value}px`);
        break;
      case ButtonEventEnums.DecreaseFontSize:
        this.fontSize.value = (parseInt(this.fontSize.value) - 1).toString();
        this.updateElement('fontSize', `${this.fontSize.value}px`);
        break;
      case ButtonEventEnums.ForeColour:
        this.foreColor.value = this.changedValue;
        this.updateElement('color', `${this.foreColor.value}`);
        break;
      case ButtonEventEnums.BackgroundColour:
        this.backgroundColor.value = this.changedValue;
        this.updateElement('backgroundColor', `${this.backgroundColor.value}`)
        break;
      case ButtonEventEnums.Edit:
        console.log("eidting")
        this.isEditingText = !this.isEditingText;
        break;
      case ButtonEventEnums.Save:
        this.buildStylesArray();
        break;
    }
  }

  private buildStylesArray() {
    let styles: ICssStyles[] = [];
    styles.push(this.foreColor);
    styles.push(this.backgroundColor);
    styles.push(this.fontFamily);
    styles.push(this.fontSize);
    styles.push(this.verticalAlignment);
    styles.push(this.horizontalAlignment);
    this.styles.emit(styles);
  }

  private updateTextAlignment(alignment: ButtonEventEnums) {
    switch (alignment) {
      case ButtonEventEnums.HorizontalAlignmentChanged:

        this.horizontalAlignment.value = this.changedValue;
        console.log('H =  %c⧭', 'color: #917399',  this.changedValue);
        break;
      case ButtonEventEnums.VerticalAlignmentChanged:
        console.log('V =  %c⧭', 'color: #917399', this.changedValue);
        this.verticalAlignment.value = this.changedValue;
        break;
    }
    this.removeClasses();
    this.applyClasses();
  }

  private updateElement(styleElement: string, value: string) {
    this.el.nativeElement.style[styleElement] = value;
  }

  private removeClass(className: string): void {
    this.renderer.removeClass(this.el.nativeElement, className);
  }

  private removeClasses(): void {
    this.removeClass('align-content-right');
    this.removeClass('align-content-center');
    this.removeClass('align-content-left');
    this.removeClass('text-align-justify');
    this.removeClass('vertical-align-bottom');
    this.removeClass('vertical-align-top');
    this.removeClass('vertical-align-centre');
    this.removeClass('text-area-non-edit');
  }

  private applyClasses() {
    if (!this.isEditingText) this.renderer.addClass(this.el.nativeElement, 'text-area-non-edit');
    this.renderer.addClass(this.el.nativeElement, this.horizontalAlignment.value);
    this.renderer.addClass(this.el.nativeElement, this.verticalAlignment.value);
  }

  private getStyleValue(
    stylesArray: ICssStyles[],
    styleTofind: cssStyleEnum
  ): ICssStyles {
    return stylesArray.filter(
      style => style.pmStyleProperty === styleTofind
    )[0];
  }
}
