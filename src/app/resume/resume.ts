import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume.html',
  styleUrl: './resume.css',
})
export class Resume {
  experience = [
    {
      period: 'Νοεμβριος 2025 - Μάϊος 2026',
      title: 'Smooth Journey',
      company: 'Πτυχιακή Εργασία',
      description: 'Σχεδιασμός και ανάπτυξη Full-Stack συστημάτων για διαχείριση enterprise δεδομένων με Angular και .NET Core.'
    },
    {
      period: '2026 - 2027',
      title: 'Προσωπικο Project',
      company: 'TotalUnit Project',
      description: 'Επικεφαλής ανάπτυξης για το TotalUnit. Σχεδιασμός multi-platform file conversion engine και optimization backend αλγορίθμων.'
    }
  ];

  education = [
    {
      period: '2017 - 2026',
      title: 'Μηχανικός Πληροφορικής, Υπολογιστών & Τηλεπικοινωνιών',
      institution: 'ΔΙ.ΠΑ.Ε. (Σέρρες)',
      description: 'Εξειδίκευση σε Software Engineering, Κατανεμημένα Συστήματα και Ασφάλεια Δικτύων.'
    }
  ];

  skills = [
    { category: 'Frontend', items: ['Angular', 'TypeScript', 'RxJS', 'Signal State', 'Tailwind CSS'] },
    { category: 'Backend', items: ['C#', 'ASP.NET Core', 'Python', 'Entity Framework', 'REST APIs'] },
    { category: 'Infrastructure', items: ['Linux / Bash', 'Docker', 'Git / GitHub', 'CI/CD'] },
    { category: 'Data', items: ['SQL Server', 'SQLite', 'MongoDB', 'Redis'] }
  ];

  downloadCV() {
    window.open('cv-xaralamposkyriakdis.pdf', '_blank');
  }}
