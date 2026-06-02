import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Project } from '../interface/project';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  activeFilter: string = 'All';

  projects: Project[] = [
    {
      title: 'Smooth Journey',
      category: 'Web/SaaS',
      description: 'PROJECTS.DESC_SMOOTH_JOURNEY',
      techStack: ['Angular', 'ASP.NET Core', 'SQL'],
      grade: '10/10',
      link: 'https://github.com/GodIuz/smoothjourney-ui'
    },
    {
      title: 'TotalUnit',
      category: 'Web/SaaS',
      description: 'PROJECTS.DESC_TOTAL_UNIT',
      techStack: ['C#', '.NET', 'Desktop/Web'],
      link: 'https://github.com/GodIuz/Convertify'
    },
    {
      title: 'Privacy Gateway & DNS Sinkhole',
      category: 'Hardware',
      description: 'PROJECTS.DESC_PRIVACY',
      techStack: ['Raspberry Pi', 'Linux', 'Networking', 'Tor']
    },
    {
      title: 'NotYezz',
      category: 'Content',
      description: 'PROJECTS.DESC_NOTYEZZ',
      techStack: ['Video Production', 'popularization of science', 'Community'],
      link: 'https://www.youtube.com/@NotYezz'
    }
];

searchQuery: string = '';

get filteredProjects() {
  let result = this.projects;

  if (this.activeFilter !== 'All') {
    result = result.filter(p => p.category === this.activeFilter);
  }

  if (this.searchQuery.trim() !== '') {
    const query = this.searchQuery.toLowerCase();
    result = result.filter(p => 
      p.title.toLowerCase().includes(query) || 
      p.description.toLowerCase().includes(query) ||
      p.techStack.some(tech => tech.toLowerCase().includes(query))
    );
  }

  return result;
}

updateSearch(event: Event) {
  this.searchQuery = (event.target as HTMLInputElement).value;
}

clearSearch() {
    this.searchQuery = '';
    this.activeFilter = 'All';
    const searchInput = document.querySelector('.search-input') as HTMLInputElement;
    if (searchInput) searchInput.value = '';
  }
}
