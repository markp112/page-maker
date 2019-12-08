import { Directive, ElementRef, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { ButtonEventEnums } from 'src/app/models/enums/ButtonEventEnums';
import { ICssStyles } from 'src/app/models/interfaces/cssStyle';
import { ImageStyles } from 'src/app/models/classes/image-styles/image-styles';

@Directive({
  selector: '[appImageFormatter]'
})
export class ImageFormatterDirective {

  @Input() changedValue: string;
  @Input() buttonEvent: ButtonEventEnums;
  @Input() setImageStyles: ImageStyles;
  @Output() stylesUpdated = new EventEmitter<ICssStyles[]>();
  @Output() stylesCreated = new EventEmitter<ICssStyles[]>();

  private lastButtonClick: ButtonEventEnums;
  private imageStyles = new ImageStyles();

  constructor(private el: ElementRef) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.setImageStyles) {
      this.imageStyles = this.setImageStyles;
      this.applyAllStyles();
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
    switch (buttonEvent) {
      case ButtonEventEnums.ImageUp:
        this.imageStyles.moveUpDownByAmount(-1);
        this.updateElement("top", `${this.imageStyles.top}`);
        break;
      case ButtonEventEnums.ImageDown:
        this.imageStyles.moveUpDownByAmount(1);
        this.updateElement("top", `${this.imageStyles.top}`);
        break;
      case ButtonEventEnums.ImageLeft:
        this.imageStyles.moveLeftRightByAmount(-1);
        this.updateElement("left", `${this.imageStyles.left}`);
        break;
      case ButtonEventEnums.ImageRight:
        this.imageStyles.moveLeftRightByAmount(-1);
        this.updateElement("left", `${this.imageStyles.left}`);
        break;
      case ButtonEventEnums.ImageIncreaseSize:
        this.imageStyles.incrementDecrementSize(1);
        this.updateElement("height", `${this.imageStyles.height}px`);
        this.updateElement("width", `${this.imageStyles.width}px`);
        break;
      case ButtonEventEnums.ImageDecreaseSize:
        this.imageStyles.incrementDecrementSize(-1);
        this.updateElement("height", `${this.imageStyles.height}px`);
        this.updateElement("width", `${this.imageStyles.width}px`);
        break;
      case ButtonEventEnums.ImageBackgroundColour:
        this.imageStyles.backgroundColour = this.changedValue;
        break;
      case ButtonEventEnums.UploadUrl:
        this.imageStyles.url = this.changedValue;
        break;
      case ButtonEventEnums.UploadFile:
        this.imageStyles.url = this.changedValue;
        break;
      case ButtonEventEnums.Save:
        this.stylesCreated.emit(this.buildStylesArray());
        break;
      case ButtonEventEnums.UpdateRecord:
        this.stylesUpdated.emit(this.buildStylesArray());
        break;
    }
  }

  private applyAllStyles() {
    this.updateElement("top", `${this.imageStyles.top}`);
    this.updateElement("left", `${this.imageStyles.left}`);
    this.updateElement("width", `${this.imageStyles.width}px`);
    this.updateElement("height", `${this.imageStyles.height}px`);
  }

  private updateElement(styleElement: string, value: string) {
    this.el.nativeElement.style[styleElement] = value;
  }

  private buildStylesArray(): ICssStyles[] {
    return this.imageStyles.getStyles();
  }
}
