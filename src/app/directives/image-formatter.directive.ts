import { Directive, Input, ElementRef, SimpleChanges } from '@angular/core';


@Directive({
  selector: "[appImageFormatter]"
})
export class ImageFormatterDirective {

  @Input() height: number;
  @Input() width: number;
  @Input() left: number;
  @Input() top: number;

  constructor(private el: ElementRef) {}

  ngOnChanges(change: SimpleChanges){

    if(change.height || change.width) {
      this.el.nativeElement.style.height = `${this.height}px`;
      this.el.nativeElement.style.width = `${this.width}px`;
    }
    if(change.top) this.el.nativeElement.style.top = `${this.top}px`
    if(change.left) this.el.nativeElement.style.left = `${this.left}px`;
  }
}

