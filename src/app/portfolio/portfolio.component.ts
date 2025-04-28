import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-portfolio',
  standalone: false,
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit {

  projects= {} as Project[];

  isCollapsed: boolean = true;
  
  typescript: boolean = false;
  angular: boolean = false;
  dart: boolean = false;
// add filter here later akif

  filtering: boolean = false;

  constructor(private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle('Akif Aziz | Portfolio');
   }
  ngOnInit(): void {
   this.projects = this.projectService.GetProjects();
  }

  Filter(){
    let filterTags: Tag[] = [];

    if (this.typescript) {
      filterTags.push(Tag.TYPESCRIPT);
    } 
    if (this.angular) {
      filterTags.push(Tag.ANGULAR);
    } 
    if (this.dart) {
      filterTags.push(Tag.DART);
    } 

    if(this.typescript || this.angular || this.dart){
      this.filtering = true;
    }
    else {
      this.filtering = false;
    }

    this.projects = this.projectService.GetProjectsByFilter(filterTags);
  }

  ResetFilter(){
    this.typescript = false;
    this.angular = false;
    this.dart = false;


    this.projects = this.projectService.GetProjects();
    this.filtering = false;
  }

  handleProjectClick(project: any): void {
    if (!project.projectLink || project.projectLink.trim() === '') {
        alert('Coming Soon!'); // Replace this with a modal if needed
    } else {
        window.open(project.projectLink, '_blank'); // Open the link in a new tab
    }
  }
}
