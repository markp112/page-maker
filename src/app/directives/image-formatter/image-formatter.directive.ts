import { Directive, ElementRef, Input, SimpleChanges} from '@angular/core';
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
      console.log("changes.changedValue");
    } else {
      console.log("came here")
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
    this.imageFormatter.cssStyleTag.forEach((style,index) => {
      if(style == "url") {
        this.updateElementSrc(this.imageFormatter.value[index]);
      }else {
        this.updateElement(style, this.imageFormatter.value[index]);
      }
    })

    // this.imageFormatter.processButtonClick(buttonEvent, this.changedValue);
    // this.imageFormatter.
    // switch (buttonEvent) {
    //   case ButtonEventEnums.ImageUp:
    //     this.imageStyles.moveUpDownByAmount(-1);
    //     this.updateElement("top", `${this.imageStyles.top}`);
    //     break;
    //   case ButtonEventEnums.ImageDown:
    //     this.imageStyles.moveUpDownByAmount(1);
    //     this.updateElement("top", `${this.imageStyles.top}`);
    //     break;
    //   case ButtonEventEnums.ImageLeft:
    //     this.imageStyles.moveLeftRightByAmount(-1);
    //     this.updateElement("left", `${this.imageStyles.left}`);
    //     break;
    //   case ButtonEventEnums.ImageRight:
    //     this.imageStyles.moveLeftRightByAmount(-1);
    //     this.updateElement("left", `${this.imageStyles.left}`);
    //     break;
    //   case ButtonEventEnums.ImageIncreaseSize:
    //     this.imageStyles.incrementDecrementSize(1);
    //     this.updateElement("height", `${this.imageStyles.height}px`);
    //     this.updateElement("width", `${this.imageStyles.width}px`);
    //     break;
    //   case ButtonEventEnums.ImageDecreaseSize:
    //     this.imageStyles.incrementDecrementSize(-1);
    //     this.updateElement("height", `${this.imageStyles.height}px`);
    //     this.updateElement("width", `${this.imageStyles.width}px`);
    //     break;
    //   case ButtonEventEnums.ImageBackgroundColour:
    //     this.imageStyles.backgroundColour = this.changedValue;
    //     break;
    //   case ButtonEventEnums.UploadUrl:
    //     this.imageStyles.url = this.changedValue;
    //     break;
    //   case ButtonEventEnums.UploadFile:
    //     this.imageStyles.url = this.changedValue;
    //     break;
    //   case ButtonEventEnums.Save:
    //     this.stylesCreated.emit(this.buildStylesArray());
    //     break;
    //   case ButtonEventEnums.UpdateRecord:
    //     this.stylesUpdated.emit(this.buildStylesArray());
    //     break;
    // }
  }

  // private applyAllStyles() {
  //   this.updateElement("top", `${this.imageStyles.top}`);
  //   this.updateElement("left", `${this.imageStyles.left}`);
  //   this.updateElement("width", `${this.imageStyles.width}px`);
  //   this.updateElement("height", `${this.imageStyles.height}px`);
  // }

  private updateElement(styleElement: string, value: string) {
    this.el.nativeElement.style[styleElement] = value;
  }
  
  private updateElementSrc(url:string){
    this.el.nativeElement.src = url;
  }


}
