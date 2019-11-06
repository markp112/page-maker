import { Directive, ElementRef, Input, SimpleChange, OnChanges} from '@angular/core';
import { IText } from '../models/interfaces/text';

@Directive({
  selector: "[appTextFormatter]"
})
export class TextFormatterDirective implements OnChanges {
  @Input() textRef: IText;

  constructor(private el: ElementRef) {}

  ngOnChange(changes: SimpleChange) {
    

    }
  }


