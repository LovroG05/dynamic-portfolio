import {
  Component, OnInit, ComponentRef,
  ViewContainerRef,
  ViewChild,
} from '@angular/core';
import { CardsComponent } from '../cards/cards.component';
import { ProjectItem } from '../project-item';
import { ProjectDirective } from '../project.directive';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  projects: ProjectItem[] = [
    new ProjectItem(CardsComponent, {
      title: 'Card 1',
      content: 'This is a description for the first card',
      imgUrl: 'https://source.unsplash.com/random/400x200',
      bgUrl: "https://source.unsplash.com/random/400x200",
      subtitle: "Subtitle 1",
      imgAlt: "Alt 1",
      url: "https://www.google.com"
    }),
  ];
  @ViewChild(ProjectDirective, { static: true }) projectHost!: ProjectDirective;

  constructor() { }

  ngOnInit(): void {
    const viewContainerRef = this.projectHost.viewContainerRef;
    viewContainerRef.clear();
    this.projects.forEach(project => {
      const componentRef = viewContainerRef.createComponent<CardsComponent>(project.component);
      componentRef.instance.title = project.data.title;
      componentRef.instance.content = project.data.content;
      componentRef.instance.imgUrl = project.data.imgUrl;
      componentRef.instance.bgUrl = project.data.bgUrl;
      componentRef.instance.subtitle = project.data.subtitle;
      componentRef.instance.imgAlt = project.data.imgAlt;
      componentRef.instance.url = project.data.url;
    });
  }

}
