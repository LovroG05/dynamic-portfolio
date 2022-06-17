import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-paragraph-heading',
  templateUrl: './paragraph-heading.component.html',
  styleUrls: ['./paragraph-heading.component.scss']
})
export class ParagraphHeadingComponent {
  @Input()
  title!: string;
}
