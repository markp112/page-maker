import { Directive, ElementRef, Input, SimpleChanges, OnChanges, Renderer2} from '@angular/core';
import { IText } from '../models/interfaces/text';
import { textInitial } from '../../assets/data/mock/textInitial';
import { textHorizontalAlignment, textVerticalAlignment } from '../models/enums/text-component.enum'
@Directive({
  selector: "[appTextFormatter]"
})
export class TextFormatterDirective implements OnChanges{
  @Input() textEvent: string;
  @Input() isEditingText: boolean;
  @Input() fontSize: string;
  @Input() fontFamily: string;
  @Input() foreColor: string;
  @Input() backColor: string;

  textRef:IText = textInitial;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes,this.textEvent);

    if(changes.textEvent){
      this.handleEvent();
      let currentValue = changes.textEvent.currentValue;
      if(currentValue === "increaseFont" || currentValue  === "decreaseFont"){

      } else this.applyClasses();
    }
    if(changes.fontSize) this.el.nativeElement.style.fontSize = this.fontSize;
    if(changes.fontFamily) this.el.nativeElement.style.fontFamily = this.fontFamily;
    if(changes.foreColor) this.el.nativeElement.style.color = this.foreColor;
    if(changes.backColor) this.el.nativeElement.style.background = this.backColor;
  }

  setHorizAlignment(alignment: textHorizontalAlignment){
    this.textRef.horizontalAlignment = alignment;
  }

  setVertAlignment(alignment: textVerticalAlignment){
    this.textRef.verticalAlignment = alignment;
  }
  handleEvent(){

  switch (this.textEvent) {

    case "alignRight":
      this.setHorizAlignment(textHorizontalAlignment.alignRight);
      break;

    case "alignLeft":
        this.setHorizAlignment(textHorizontalAlignment.alignLeft);
      break;

    case "alignCenter":
        this.setHorizAlignment(textHorizontalAlignment.alignCenter);
      break;

    case "textAlignJustify":
        this.setHorizAlignment(textHorizontalAlignment.alignJustify);
      break;

    case "verticalAlignTop":
      this.setVertAlignment(textVerticalAlignment.alignTop);
      break;

    case "verticalAlignBottom":
        this.setVertAlignment(textVerticalAlignment.alignBottom);
      break;

    case "verticalAlignCentre":
        this.setVertAlignment(textVerticalAlignment.alignCenter);
      break;


  }
}
  applyClasses() {
    this.renderer.removeClass(this.el.nativeElement,'align-content-right');
    this.renderer.removeClass(this.el.nativeElement,'align-content-center');
    this.renderer.removeClass(this.el.nativeElement,'align-content-left');
    this.renderer.removeClass(this.el.nativeElement,'text-align-justify');
    this.renderer.removeClass(this.el.nativeElement,'vertical-align-bottom');
    this.renderer.removeClass(this.el.nativeElement,'vertical-align-top');
    this.renderer.removeClass(this.el.nativeElement,'vertical-align-centre');
    this.renderer.removeClass(this.el.nativeElement,'text-area-non-edit');

  if (!this.isEditingText) this.renderer.addClass(this.el.nativeElement,'text-area-non-edit');
  if (this.textRef.horizontalAlignment === textHorizontalAlignment.alignLeft) {
    this.renderer.addClass(this.el.nativeElement, 'align-content-left' );
  }
  if (this.textRef.horizontalAlignment === textHorizontalAlignment.alignRight) {
      this.renderer.addClass(this.el.nativeElement, 'align-content-right' );
  }
  if (this.textRef.horizontalAlignment === textHorizontalAlignment.alignCenter) {
    this.renderer.addClass(this.el.nativeElement, 'align-content-center' );
  }
  if (this.textRef.horizontalAlignment === textHorizontalAlignment.alignJustify) {
    this.renderer.addClass(this.el.nativeElement, 'text-align-justify' );
  }
  if (this.textRef.verticalAlignment === textVerticalAlignment.alignBottom) {
    this.renderer.addClass(this.el.nativeElement, 'vertical-align-bottom' );
  }
  if (this.textRef.verticalAlignment === textVerticalAlignment.alignTop) {
    this.renderer.addClass(this.el.nativeElement, 'vertical-align-top' );
  }
  if (this.textRef.verticalAlignment === textVerticalAlignment.alignCenter) {
    this.renderer.addClass(this.el.nativeElement, 'vertical-align-centre' );
  }

  }
}


