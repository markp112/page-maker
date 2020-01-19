import { Directive, ElementRef, Input, SimpleChanges } from '@angular/core';
import { ButtonEventEnums } from 'src/app/models/enums/ButtonEventEnums';
import { ImageFormatterService } from 'src/app/shared/formatters/image-formatter/image-formatter.service'
import { cssStyleEnum } from 'src/app/models/enums/cssStylesEnum';


@Directive({
  selector: '[appImageFormatter]'
})
export class ImageFormatterDirective {

  @Input() changedValue: string;
  @Input() buttonEvent: ButtonEventEnums;

  private lastButtonClick: ButtonEventEnums;

  constructor(private el: ElementRef, private _imageFormatter: ImageFormatterService) { }

  ngOnChanges(changes: SimpleChanges) {

    if (changes.changedValue) {
      this.lastButtonClick = this.buttonEvent;
      this.respondToButtonClick(this.buttonEvent);
    } else {
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

  respondToButtonClick(buttonEvent: ButtonEventEnums) {
    if(buttonEvent !== ButtonEventEnums.RetrieveAllStyles){
      this._imageFormatter.processButtonClick(buttonEvent, this.changedValue);
      this.processStyleChangeTriggeredByUser();
    }else {
      this.processAllStyles()
    }
  }

  private processStyleChangeTriggeredByUser(){
    this._imageFormatter.cssStyleTag.forEach((style, index) => {
      if (style == "src") {
        this.updateElementSrc(this._imageFormatter.value[index]);
      } else {
        this.updateElement(style, this._imageFormatter.value[index]);
      }
    })
  }

  private processAllStyles(){
    this._imageFormatter.getAllImageStyles().forEach(style =>{
      switch (style.pmStyleProperty){
        case cssStyleEnum.backgroundColor:
          this.updateElement(style.styleTag, style.value);
          break;
        case cssStyleEnum.url:
          this.updateElementSrc(style.value);
          break;
        default:
          this.updateElement(style.styleTag, `${style.value}px`);
      }
      if(style.pmStyleProperty === cssStyleEnum.backgroundColor){

      }else {

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
