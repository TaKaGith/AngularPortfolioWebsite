import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  projects: Project[] = [
    {
      id: 0,
      name: 'Sample Angular Project',
      summary: 'Test Description',
      description: 'This is sample Angular Project',
      projectLink: 'https://github.com/TaKaGith',
      pictures: ["assets/image_1.jpg","assets/image_2.jpg","assets/image_3.jpg"],
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT],
    },
    {
      id: 1,
      name: 'Sample C# Project',
      summary: 'Test Description',
      description: 'This is sample C# Project',
      projectLink: 'https://github.com/TaKaGith',
      pictures: ["assets/image_1.jpg","assets/image_2.jpg","assets/image_3.jpg"],
      tags: [Tag.CSHARP],
    },
    {
      id: 2,
      name: 'Digital Daily Morning Meeting Value Stream Area',
      summary: 'An KPI Dashboard development for the Digital Daily Morning Meeting Value Stream Area using Microsoft Power BI',
      description: 'Digital Daily Morning Meeting: Value Stream Area (DMM VS Area) Dashboard objectively being developed to indicate and monitor Bosch Production line performances by using selected Key Performance Indicator (KPI) on Value Stream Area Level.Target: To track the performance of every production line under the same Value Stream and find out which line causing the deviation to come out with problem solving. ',
      projectLink: '',
      pictures: ["assets/powerbi_1.jpg","assets/powerbi_2.jpg","assets/powerbi_3.jpg"],
      tags: [Tag.DART ,Tag.POWERBI],
    },
  ];

  constructor() {}

  GetProjects(): Project[] {
    return this.projects;
  }

  GetProjectById(id: number): Project {
    let project = this.projects.find((project) => project.id === id);

    if (project === undefined) {
      throw new TypeError('There is no project that mathces the id: ' + id);
    }
    return project;
  }

  GetProjectsByFilter(filterTags: Tag[]){
    let filteredProjects: Project[] = [];

    this.projects.forEach(function (project) {
      let foundAll = true;

      filterTags.forEach(function (filterTag){
        if (project.tags.includes(filterTag) == false){
          foundAll = false;
        } 
      });

      if (foundAll) {
        filteredProjects.push(project);
      }
    });

    return filteredProjects;
  }
}
