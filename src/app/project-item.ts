import { Type } from '@angular/core';

export class ProjectItem {
  constructor(public component: Type<any>, public data: any) {}
}