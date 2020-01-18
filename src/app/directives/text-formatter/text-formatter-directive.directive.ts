import { Directive, OnChanges, Input, SimpleChanges, Renderer2, ElementRef } from '@angular/core';
import { ButtonEventEnums } from 'src/app/models/enums/ButtonEventEnums';
import { TextDirectiveFormatterService } from 'src/app/shared/formatters/text/text-directive-formatter.service';
import { cssStyleEnum } from 'src/app/models/enums/cssStylesEnum';

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
    //if loading the page from the database apply all styles
    if(buttonClickedEvent === ButtonEventEnums.RetrieveAllStyles){
     // this.updateTextAlignment();
     this.removeClasses();
      this.textDirectiveFormatter.getAllTextStyles().forEach(style => {
        if(style.pmStyleProperty === cssStyleEnum.fontSize){
          this.updateElement(style.styleTag, `${style.value}px`);
        }
        this.updateElement(style.styleTag, style.value);
        if(style.pmStyleProperty === cssStyleEnum.horizontalAlignment || style.pmStyleProperty === cssStyleEnum.verticalAlignment){
          this.applyAClass(style.value);

        }
      });
    } else {
    this.textDirectiveFormatter.processButtonClick(buttonClickedEvent, this.changedValue);
    this.applyFormatting(buttonClickedEvent);
    }
  }

  private applyFormatting(buttonClickedEvent: ButtonEventEnums) {
    if (this.textDirectiveFormatter.isHorizontalFormatter || this.textDirectiveFormatter.isVerticalFormatter) {
      this.updateTextAlignment();
    } else {
      this.updateElement(this.textDirectiveFormatter.cssStyleTag, this.textDirectiveFormatter.value);
    }
  }

  private updateTextAlignment() {
    this.removeClasses();
    this.applyAClass(this.textDirectiveFormatter.cssClass);
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

  //refactore the below two functions
  private applyAClass(className: string){
    this.renderer.addClass(this.el.nativeElement, "text-area-non-edit");
    this.renderer.addClass(this.el.nativeElement, className);

  }
  // private applyClasses() {
  //   this.renderer.addClass(this.el.nativeElement, "text-area-non-edit");
  //   this.renderer.addClass(this.el.nativeElement,this.textDirectiveFormatter.cssClass );
  // }
}
