import { Directive, OnChanges, Input, SimpleChanges, Renderer2, ElementRef, Output, EventEmitter } from '@angular/core';
import { ButtonEventEnums } from 'src/app/models/enums/ButtonEventEnums';
import { ICssStyles } from 'src/app/models/interfaces/cssStyle';
import { TextStyles } from 'src/app/models/classes/text-styles/text-styles';
import { TextDirectiveFormatterService } from 'src/app/shared/formatters/text/text-directive-formatter.service';

@Directive({
  selector: "[appTextFormatterDirective]"
})
export class TextFormatterDirectiveDirective implements OnChanges {
  @Input() buttonEvent: ButtonEventEnums;
  @Input() changedValue: string;

  private lastButtonClick: ButtonEventEnums;
  private isEditingText: boolean = false;

  constructor(private el: ElementRef, private renderer: Renderer2, private textDirectiveFormatter: TextDirectiveFormatterService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('changes:%c⧭', 'color: #aa00ff', changes);

    if (changes.buttonEvent) {
      this.processButtonClick();
    }
  }
  processButtonClick() {
    this.textDirectiveFormatter.processButtonClick(this.buttonEvent, this.changedValue);
    console.log("this.changedValue%c⧭", "color: #733d00", this.changedValue);
    console.log("this.buttonEvent%c⧭", "color: #e50000", this.buttonEvent);
    this.applyFormatting(this.buttonEvent)
  }

  private applyFormatting(buttonClickedEvent: ButtonEventEnums) {
    console.log('buttonClicked%c%s', 'color: #00bf00', buttonClickedEvent);

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
    console.log("styleElement", styleElement);
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
