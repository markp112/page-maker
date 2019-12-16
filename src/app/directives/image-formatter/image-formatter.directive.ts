import { Directive, ElementRef, Input, SimpleChanges } from '@angular/core';
import { ButtonEventEnums } from 'src/app/models/enums/ButtonEventEnums';
import { ImageFormatterService } from 'src/app/shared/formatters/image-formatter/image-formatter.service'


@Directive({
  selector: '[appImageFormatter]'
})
export class ImageFormatterDirective {

  @Input() changedValue: string;
  @Input() buttonEvent: ButtonEventEnums;

  private lastButtonClick: ButtonEventEnums;

  constructor(private el: ElementRef, private imageFormatter: ImageFormatterService) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.changedValue) {
      this.lastButtonClick = this.buttonEvent;
      this.respondToBButtonClick(this.buttonEvent);
    } else {
      let buttonClicked: ButtonEventEnums;
      if (changes.buttonEvent) {
        buttonClicked = changes.buttonEvent.currentValue;
        this.lastButtonClick = buttonClicked;
      } else {
        buttonClicked = this.lastButtonClick;
      }
      this.respondToBButtonClick(this.buttonEvent);
    }
  }

  respondToBButtonClick(buttonEvent: ButtonEventEnums) {
    this.imageFormatter.processButtonClick(buttonEvent, this.changedValue);
    this.imageFormatter.cssStyleTag.forEach((style, index) => {
      if (style == "src") {
        this.updateElementSrc(this.imageFormatter.value[index]);
      } else {
        this.updateElement(style, this.imageFormatter.value[index]);
      }
    })
  }

  private updateElement(styleElement: string, value: string) {
    this.el.nativeElement.style[styleElement] = value;
  }

  private updateElementSrc(url: string) {
    this.el.nativeElement.src = url;
  }


}
