import { Directive, ElementRef, Input, SimpleChanges, OnChanges, Renderer2} from '@angular/core';
import { IText } from '../models/interfaces/text';
import { textInitial } from '../../assets/data/mock/textInitial';
import {textHorizontalAlignment, textVerticalAlignment } from '../models/enums/text-component.enum'
@Directive({
  selector: "[appTextFormatter]"
})
export class TextFormatterDirective implements OnChanges{
  @Input() textEvent: string;
  @Input() foreColor: string;
  @Input() backColor: string;

  textRef:IText = textInitial;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes,this.textEvent);

    if(changes.textEvent){
      this.handleEvent();
      this.applyClasses();
    }

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

      case "increaseFont":
        this.textRef.size++;
        break;

      case "decreaseFont":
        this.textRef.size--;
        break;
    }
  }
    applyClasses() {
      this.renderer.removeClass(this.el.nativeElement,'align-content-right');
      this.renderer.removeClass(this.el.nativeElement,'align-content-center');
      this.renderer.removeClass(this.el.nativeElement,'align-content-left');
      this.renderer.removeClass(this.el.nativeElement,'text-align-justify');

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

    // if (this.textRef.alignRight) classes.push("align-content-right");
    // if (this.textRef.alignCenter) classes.push("align-content-center");
    // if (this.textRef.alignTextJustify) classes.push("text-align-justify");
    // if (this.textRef.verticalAlignBottom) classes.push("vertical-align-bottom");
    // if (this.textRef.verticalAlignTop) classes.push("vertical-align-top");
    // if (this.textRef.verticalAlignCentre) classes.push("vertical-align-centre");

    }
  }


