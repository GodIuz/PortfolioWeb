import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./navbar/navbar";
import { Footer } from "./footer/footer";
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['en', 'el']);
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang?.match(/el/) ? 'el' : 'en');
  }
}
