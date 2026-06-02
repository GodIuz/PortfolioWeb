import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterModule,TranslateModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
