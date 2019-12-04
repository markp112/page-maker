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
  @Input() setTextStyles: TextStyles;
  @Output() stylesUpdated = new EventEmitter<ICssStyles[]>();
  @Output() stylesCreated = new EventEmitter<ICssStyles[]>();

  private lastButtonClick: ButtonEventEnums;
  private isEditingText: boolean = false;
  private textStyles: TextStyles = new TextStyles();

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("chnages calleds%c⧭", "color: #aa00ff", changes);
    if(changes.setTextStyles){
      this.textStyles = this.setTextStyles;
      this.applyAllStyles();
    }else{

      let buttonClicked: ButtonEventEnums;
      if (changes.buttonEvent) {
        buttonClicked = changes.buttonEvent.currentValue;
        this.lastButtonClick = buttonClicked;
      } else {
        buttonClicked = this.lastButtonClick;
      }
      this.respondToButtonClick(this.buttonEvent);
    }
  }

  private respondToButtonClick(buttonClickedEvent: ButtonEventEnums) {
    switch (buttonClickedEvent) {
      case ButtonEventEnums.VerticalAlignmentChanged:
        this.updateTextAlignment(buttonClickedEvent);
        break;
      case ButtonEventEnums.HorizontalAlignmentChanged:
        this.updateTextAlignment(buttonClickedEvent);
        break;
      case ButtonEventEnums.FontFamily:
        this.textStyles.fontFamily = this.changedValue;
        this.updateElement("font-family", `${this.textStyles.fontFamily}`);
        break;
      case ButtonEventEnums.IncreaseFontSize:
        this.textStyles.incrementDecrementFont(1);
        this.updateElement("font-size", `${this.textStyles.fontSize}px`);
        break;
      case ButtonEventEnums.DecreaseFontSize:
        this.textStyles.incrementDecrementFont(-1);
        this.updateElement("font-size", `${this.textStyles.fontSize}px`);
        break;
      case ButtonEventEnums.ForeColour:
        this.textStyles.foreColour = this.changedValue;
        this.updateElement("color", `${this.textStyles.foreColour}`);
        break;
      case ButtonEventEnums.BackgroundColour:
        this.textStyles.fontBackgroundColour = this.changedValue;
        this.updateElement("background-color", `${this.textStyles.fontBackgroundColour}`);
        break;
      case ButtonEventEnums.Edit:
        this.isEditingText = !this.isEditingText;
        break;
      case ButtonEventEnums.Save:
        this.stylesCreated.emit(this.buildStylesArray());
        break;
      case ButtonEventEnums.UpdateRecord:
        this.stylesUpdated.emit(this.buildStylesArray());
        break;
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

  private updateTextAlignment(alignment: ButtonEventEnums) {
    switch (alignment) {
      case ButtonEventEnums.HorizontalAlignmentChanged:
        this.textStyles.fontHorizontalAlignment = this.changedValue;
        break;
      case ButtonEventEnums.VerticalAlignmentChanged:
        this.textStyles.fontVerticalAlignment = this.changedValue;
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
    if (!this.isEditingText)
      this.renderer.addClass(this.el.nativeElement, "text-area-non-edit");
    this.renderer.addClass(this.el.nativeElement, this.textStyles.fontHorizontalAlignment);
    this.renderer.addClass(this.el.nativeElement, this.textStyles.fontVerticalAlignment);
  }
}
