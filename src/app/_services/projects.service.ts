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
      name: 'Angular Portfolio Website',
      summary: 'A website application that showcases my skills and projects.',
      description: 'Developed using Angular 19 Framework and TypeScript, this portfolio website showcases my skills and projects. The website is designed to be responsive and user-friendly, making it easy for visitors to navigate and find the information they need.',
      projectLink: '',
      pictures: ["assets/angular_0.png","assets/angular_1.png","assets/angular_2.png"],
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.CSS, Tag.HTML],
    },
    {
      id: 1,
      name: 'Current Profession: Software Engineer',
      summary: 'A daily task basis as Software Engineer at SRM Integration Sdn Bhd',
      description: 'Design, develop, debug and test machine control software for high-speed machines. Provide application integration test and documentation. Provide assistance and software support to customers as well as evaluation to find solutions on customers modification requests. Work closely with specialist team to evaluate interface between hardware and software as well as the operational and performance requirements of the overall system. Analyze and implement customer requirements and resolve software issues towards the feasibility of design within time and meeting the costs budget. Responsible for software development process definition and improvements. ',
      projectLink: '',
      pictures: ["assets/srm_0.png","assets/srm_1.png","assets/srm_2.png"],
      tags: [Tag.CSHARP, Tag.CPLUSPLUS, Tag.SECSGEM, Tag.WINDFORM],
    },
    {
      id: 2,
      name: 'Digital Daily Morning Meeting Value Stream Area',
      summary: 'An KPI Dashboard development for the Digital Daily Morning Meeting Value Stream Area using Microsoft Power BI',
      description: 'Digital Daily Morning Meeting: Value Stream Area (DMM VS Area) Dashboard objectively being developed to indicate and monitor Bosch Production line performances by using selected Key Performance Indicator (KPI) on Value Stream Area Level.Target: To track the performance of every production line under the same Value Stream and find out which line causing the deviation to come out with problem solving. ',
      projectLink: '',
      pictures: ["assets/powerbi_1.png","assets/powerbi_2.png","assets/powerbi_3.png"],
      tags: [Tag.DART ,Tag.POWERBI],
    },
    {
      id: 3,
      name: 'ThreeD ED',
      summary: 'A mobile application integrated with augmented reality (AR) to help students in Malaysia learn history interactively.',
      description: 'A project developed using Unity3D with augmented reality (AR) features to display 3D models of historical buildings in Malaysia. This project focuses on making the process of learning Malaysian history more interesting and fun',
      projectLink: '',
      pictures: ["assets/unity_0.jpg","assets/unity_1.jpg","assets/unity_2.jpg","assets/unity_3.jpg","assets/unity_4.jpg","assets/unity_5.jpg","assets/unity_6.jpg","assets/unity_7.jpg"],
      tags: [Tag.CSHARP, Tag.UNITTY3D],
    },
    {
      id: 4,
      name: 'Final Year Project',
      summary: 'ShopLoc: Mobile Application for Locating Items Inside Retail Store',
      description: 'Mobile Application function as shopping assistance for locating items inside the retails store using localization technique. Developed using Xamarin.Forms and C# programming language. The application is designed to help users locate items inside a retail store by providing a map and directions to the desired item.',
      projectLink: 'https://drive.google.com/file/d/1OwwIwDHUknSjO7s4w5InYPUDlXX1UdgX/view?usp=sharing',
      pictures: ["assets/shoploc_0.png","assets/shoploc_1.png","assets/shoploc_2.png","assets/shoploc_3.png","assets/shoploc_4.png","assets/shoploc_5.png"],
      tags: [Tag.CSHARP, Tag.XAMARINFORM],
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
