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
      pictures: ["../../assets/image_1.jpg","../../assets/image_2.jpg","../../assets/image_3.jpg"],
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT],
    },
    {
      id: 1,
      name: 'Sample C# Project',
      summary: 'Test Description',
      description: 'This is sample C# Project',
      projectLink: 'https://github.com/TaKaGith',
      pictures: ["../../assets/image_1.jpg","../../assets/image_2.jpg","../../assets/image_3.jpg"],
      tags: [Tag.CSHARP],
    },
    {
      id: 2,
      name: 'Power BI',
      summary: 'Test Description',
      description: 'This is sample Power BI Project',
      projectLink: 'https://github.com/TaKaGith',
      pictures: ["../../assets/image_1.jpg","../../assets/image_2.jpg","../../assets/image_3.jpg"],
      tags: [Tag.CSHARP],
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
}
