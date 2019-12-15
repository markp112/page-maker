import { Directive, OnChanges, Input, SimpleChanges, Renderer2, ElementRef } from '@angular/core';
import { ButtonEventEnums } from 'src/app/models/enums/ButtonEventEnums';
import { TextDirectiveFormatterService } from 'src/app/shared/formatters/text/text-directive-formatter.service';

@Directive({
  selector: "[appTextFormatterDirective]"
})
export class TextFormatterDirectiveDirective implements OnChanges {
  @Input() buttonEvent: ButtonEventEnums;
  @Input() changedValue: string;

  private lastButtonClick: ButtonEventEnums;

  constructor(private el: ElementRef, private renderer: Renderer2, private textDirectiveFormatter: TextDirectiveFormatterService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.changedValue && (this.lastButtonClick === ButtonEventEnums.IncreaseFontSize || this.lastButtonClick === ButtonEventEnums.DecreaseFontSize)){
      this.processButtonClick(this.lastButtonClick);
    }
    if (changes.buttonEvent) {
      this.lastButtonClick = this.buttonEvent;
      this.processButtonClick(this.buttonEvent);
    }
  }
  processButtonClick(buttonClickedEvent: ButtonEventEnums) {
    this.textDirectiveFormatter.processButtonClick(buttonClickedEvent, this.changedValue);
    this.applyFormatting(buttonClickedEvent);
  }

  private applyFormatting(buttonClickedEvent: ButtonEventEnums) {
    if (this.textDirectiveFormatter.isHorizontalFormatter || this.textDirectiveFormatter.isVerticalFormatter) {
      this.updateTextAlignment();
    } else {
      this.updateElement(this.textDirectiveFormatter.cssStyleTag, this.textDirectiveFormatter.value);
    }
  }

  private applyAllStyles() {
    // this.updateElement("font-family", `${this.textStyles.fontFamily}`);
    // this.updateElement("background-color", `${this.textStyles.fontBackgroundColour}`);
    // this.updateElement("color", `${this.textStyles.foreColour}`);
    // this.updateElement("font-size", `${this.textStyles.fontSize}px`);
    // this.removeClasses();
    // this.applyClasses();
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
    if (this.textDirectiveFormatter.isHorizontalFormatter) {
      this.removeClass("align-content-right");
      this.removeClass("align-content-center");
      this.removeClass("align-content-left");
      this.removeClass("text-align-justify");
    }
    else if (this.textDirectiveFormatter.isVerticalFormatter) {
      this.removeClass("vertical-align-bottom");
      this.removeClass("vertical-align-top");
      this.removeClass("vertical-align-centre");
    }
    this.removeClass("text-area-non-edit");
  }

  private applyClasses() {
    this.renderer.addClass(this.el.nativeElement, "text-area-non-edit");
    this.renderer.addClass(this.el.nativeElement, this.textDirectiveFormatter.cssClass);
  }
}
