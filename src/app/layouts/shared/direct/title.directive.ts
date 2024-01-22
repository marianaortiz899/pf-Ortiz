
import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appTitle]'
})
export class TitleDirective implements OnInit {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit(): void {
    this.renderer.setStyle(this.elementRef.nativeElement, 'font-size', '20px');
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', '#ff4081');
  }
}
