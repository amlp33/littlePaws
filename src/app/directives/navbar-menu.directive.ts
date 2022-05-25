import {
  Directive,
  ElementRef,
  OnInit,
  Renderer2,
  HostListener,
} from '@angular/core';
import { Constants as co } from '../global/constants';
@Directive({
  selector: '[appNavbarMenu]',
})
export class NavbarMenuDirective {
  constructor(private elem: ElementRef, private renderer: Renderer2) {}
}
