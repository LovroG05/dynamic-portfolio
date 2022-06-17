import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-logo',
  templateUrl: './social-logo.component.html',
  styleUrls: ['./social-logo.component.scss']
})
export class SocialLogoComponent {
  @Input() img!: string;
  @Input() url!: string;
}
