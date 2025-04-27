import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  standalone: false,
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {
  
  constructor(private titleService: Title, private render: Renderer2) {
    this.titleService.setTitle('Akif Aziz | Resume');
   }

   DonwloadFile() {
    const link = this.render.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'assets/Akif_Aziz_Resume.pdf');
    link.setAttribute('download', 'Akif_Aziz_Resume.pdf');
    link.click();
    link.remove();

    
   
  }

}
