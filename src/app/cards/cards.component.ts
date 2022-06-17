import { Component, ComponentRef, Input, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {


  @Input() url!: string;
  @Input() imgUrl!: string;
  @Input() title!: string;
  @Input() subtitle: string = "";
  @Input() content!: string;
  @Input() imgAlt: string = "";
  @Input() bgUrl: string = "";

}