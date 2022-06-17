import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParagraphHeadingComponent } from './paragraph-heading.component';

describe('ParagraphHeadingComponent', () => {
  let component: ParagraphHeadingComponent;
  let fixture: ComponentFixture<ParagraphHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParagraphHeadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParagraphHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
