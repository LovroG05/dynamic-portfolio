import {
  Component, OnInit, ComponentRef,
  ViewContainerRef,
  ViewChild,
} from '@angular/core';
import { CardsComponent } from '../cards/cards.component';
import { ProjectItem } from '../project-item';
import { ProjectDirective } from '../project.directive';
import axios from 'axios';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  
  @ViewChild(ProjectDirective, { static: true }) projectHost!: ProjectDirective;

  constructor() { }

  ngOnInit(): void {
    const viewContainerRef = this.projectHost.viewContainerRef;
    axios.get("https://perchperkins.ml/api/getprojects/").then(response => {
      response.data.forEach((project: any) => {
        const pr = new ProjectItem(CardsComponent, project);
        const componentRef = viewContainerRef.createComponent<CardsComponent>(pr.component);
        componentRef.instance.title = pr.data.title;
        componentRef.instance.content = pr.data.content;
        componentRef.instance.imgUrl = pr.data.imgUrl;
        componentRef.instance.bgUrl = pr.data.bgUrl;
        componentRef.instance.subtitle = pr.data.subtitle;
        componentRef.instance.imgAlt = pr.data.imgAlt;
        componentRef.instance.url = pr.data.url;
        // componentRef.instance.class = "card";
      });
    });
  }
}
