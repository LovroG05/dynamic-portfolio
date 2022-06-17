import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialLogoComponent } from './social-logo.component';

describe('SocialLogoComponent', () => {
  let component: SocialLogoComponent;
  let fixture: ComponentFixture<SocialLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialLogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
