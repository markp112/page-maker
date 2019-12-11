import { Directive, OnChanges, Input, SimpleChanges, Renderer2, ElementRef, Output, EventEmitter } from '@angular/core';
import { ButtonEventEnums } from 'src/app/models/enums/ButtonEventEnums';
import { ICssStyles } from 'src/app/models/interfaces/cssStyle';
import { TextStyles } from 'src/app/models/classes/text-styles/text-styles';

@Directive({
  selector: "[appTextFormatterDirective]"
})
export class TextFormatterDirectiveDirective implements OnChanges {
  @Input() buttonEvent: ButtonEventEnums;
  @Input() changedValue: string;
  @Input() cssStyleTag: string;
  @Input() cssClass: string;
  @Input() setTextStyles: TextStyles;
  @Output() stylesUpdated = new EventEmitter<ICssStyles[]>();
  @Output() stylesCreated = new EventEmitter<ICssStyles[]>();

  private lastButtonClick: ButtonEventEnums;
  private isEditingText: boolean = false;
  private textStyles: TextStyles = new TextStyles();

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.textStyles = new TextStyles();
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.setTextStyles){
      this.textStyles = this.setTextStyles;
      this.applyAllStyles();
    }
    if(changes.cssClass){

    }
      let buttonClicked: ButtonEventEnums;
      if (changes.buttonEvent) {
        buttonClicked = changes.buttonEvent.currentValue;
        this.lastButtonClick = buttonClicked;
      } else {
        
        buttonClicked = this.lastButtonClick;
      }
      this.respondToButtonClick(buttonClicked);
    }

  private respondToButtonClick(buttonClickedEvent: ButtonEventEnums) {
    if (buttonClickedEvent === ButtonEventEnums.AlignCenter 
      || buttonClickedEvent === ButtonEventEnums.AlignLeft
      || buttonClickedEvent === ButtonEventEnums.Justify
      || buttonClickedEvent === ButtonEventEnums.AlignRight) {

        this.textStyles.fontHorizontalAlignment = this.cssClass;
        console.log('changed value%c%s', 'color: #f2ceb6', this.cssClass);
        this.updateTextAlignment();
      }
      if (buttonClickedEvent === ButtonEventEnums.VerticalAlignBottom
      || buttonClickedEvent === ButtonEventEnums.VerticalAlignCenter
      || buttonClickedEvent === ButtonEventEnums.VerticalAlignTop
      ){
        this.textStyles.fontVerticalAlignment = this.cssClass;
        this.updateTextAlignment();
      }else {
        this.updateElement(this.cssStyleTag, this.changedValue)
      }
    }


  private applyAllStyles(){
    this.updateElement("font-family", `${this.textStyles.fontFamily}`);
    this.updateElement("background-color", `${this.textStyles.fontBackgroundColour}`);
    this.updateElement("color", `${this.textStyles.foreColour}`);
    this.updateElement("font-size", `${this.textStyles.fontSize}px`);
    this.removeClasses();
    this.applyClasses();
  }

  private buildStylesArray(): ICssStyles[] {
    return this.textStyles.getStyles();
  }

  private updateTextAlignment() {
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
    this.removeClass("align-content-right");
    this.removeClass("align-content-center");
    this.removeClass("align-content-left");
    this.removeClass("text-align-justify");
    this.removeClass("vertical-align-bottom");
    this.removeClass("vertical-align-top");
    this.removeClass("vertical-align-centre");
    this.removeClass("text-area-non-edit");
  }

  private applyClasses() {
    // if (!this.isEditingText){
    this.renderer.addClass(this.el.nativeElement, "text-area-non-edit");
    this.renderer.addClass(this.el.nativeElement, this.textStyles.fontHorizontalAlignment);
    console.log('%c⧭', 'color: #00a3cc', this.textStyles.fontHorizontalAlignment);
    this.renderer.addClass(this.el.nativeElement, this.textStyles.fontVerticalAlignment);
    console.log('%c⧭', 'color: #aa00ff', this.textStyles.fontVerticalAlignment);
  // }
  }
}