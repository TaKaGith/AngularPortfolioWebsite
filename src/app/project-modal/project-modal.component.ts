import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Project } from '../_models/Project';

@Component({
  selector: 'app-project-modal',
  standalone: false,
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.css'
})
export class ProjectModalComponent {
  project = {} as Project;

  constructor(public bsModalRef: BsModalRef) { 

  }

  handleProjectLinkClick(event: Event, projectLink: string): void {
    event.preventDefault(); // Prevent the default link behavior

    if (!projectLink || projectLink.trim() === '') {
        alert('Coming Soon!'); // Show "Coming Soon" message
    } else {
        window.open(projectLink, '_blank'); // Open the link in a new tab
    }
  }
}
