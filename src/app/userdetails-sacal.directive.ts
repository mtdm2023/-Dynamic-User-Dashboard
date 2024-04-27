import { transition } from '@angular/animations';
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appUserdetailsSacal]',

})
export class UserdetailsSacalDirective {

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.scale(1.1);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.scale(1.0);
  }

  private scale(factor: number) {

    this.el.nativeElement.style.transform = `scale(${factor})`;
    this.el.nativeElement.style.transition = 'transform 0.3s ease';
  }

}
