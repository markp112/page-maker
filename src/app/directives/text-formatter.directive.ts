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
  @Input() fontSize: number;
  @Input() fontFamily: string;
  @Input() foreColor: string;
  @Input() backColor: string;
  @Input() horizontalAlignment: textHorizontalAlignment;
  @Input() verticalAlignment: textVerticalAlignment;

  textRef:IText = textInitial;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges ) {
  console.log('changes :', changes);

    if(changes.textEvent){
      this.handleEvent();
      let currentValue = changes.textEvent.currentValue;
      if(currentValue === "increaseFont" || currentValue  === "decreaseFont"){

      } else this.applyClasses();
    }
    if(changes.fontSize) this.el.nativeElement.style.fontSize = `${this.fontSize}px`;
    if(changes.fontFamily) this.el.nativeElement.style.fontFamily = this.fontFamily;
    if(changes.foreColor) this.el.nativeElement.style.color = this.foreColor;
    if(changes.backColor) this.el.nativeElement.style.background = this.backColor;
    if(changes.horizontalAlignment){
      this.textRef.horizontalAlignment = changes.horizontalAlignment.currentValue;
      this.applyClasses()
    };
    if(changes.verticalAlignment) {
      this.textRef.verticalAlignment = changes.verticalAlignment.currentValue;
      this.applyClasses();
    }
  }

  handleEvent(){
    if(this.textEvent != undefined){
      if(this.textEvent.charAt(0) === "H"){
        this.textRef.horizontalAlignment = Number(this.textEvent.charAt(2));
      }
      if(this.textEvent.charAt(0) === "V"){
        this.textRef.verticalAlignment = Number(this.textEvent.charAt(2));
      }
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


