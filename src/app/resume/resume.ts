import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './resume.html',
  styleUrl: './resume.css',
})
export class Resume {
  experience = [
    {
      period: 'RESUME.EXP_PERIOD_0',
      title: 'RESUME.EXP_TITLE_0',
      company: 'RESUME.EXP_COMP_0',
      description: 'RESUME.EXP_DESC_0'
    },
    {
      period: 'RESUME.EXP_PERIOD_1',
      title: 'RESUME.EXP_TITLE_1',
      company: 'RESUME.EXP_COMP_1',
      description: 'RESUME.EXP_DESC_1'
    }
  ];

  education = [
    {
      period: '2017 - 2026',
      title: 'RESUME.EDU_TITLE_1',
      institution: 'RESUME.EDU_INST_1',
      description: 'RESUME.EDU_DESC_1'
    }
  ];

  skills = [
    { category: 'RESUME.SKILL_CAT_1', items: ['Angular', 'TypeScript', 'RxJS', 'Signal State', 'Tailwind CSS'] },
    { category: 'RESUME.SKILL_CAT_2', items: ['C#', 'ASP.NET Core', 'Python', 'Entity Framework', 'REST APIs'] },
    { category: 'RESUME.SKILL_CAT_3', items: ['Linux / Bash', 'Docker', 'Git / GitHub', 'CI/CD'] },
    { category: 'RESUME.SKILL_CAT_4', items: ['SQL Server', 'SQLite', 'MongoDB', 'Redis'] }
  ];

  downloadCV() {
    window.open('/cv/cv-xaralamposkyriakdis.pdf', '_blank');
  }
}