import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[projectHost]',
})
export class ProjectDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}