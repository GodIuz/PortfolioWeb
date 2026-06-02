import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterModule,TranslateModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  isMobileMenuOpen = false;
  currentLang: string;

  constructor(public translate: TranslateService) {
    this.currentLang = this.translate.currentLang || this.translate.getDefaultLang() || 'en';
    this.translate.onLangChange.subscribe((event) => {
      this.currentLang = event.lang;
    });
  }

  toggleMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMenu() {
    this.isMobileMenuOpen = false;
  }

  toggleLanguage() {
    const newLang = this.currentLang === 'el' ? 'en' : 'el';
    this.translate.use(newLang);
  }
}
