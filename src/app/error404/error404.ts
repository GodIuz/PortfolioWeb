import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-error404',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './error404.html',
  styleUrl: './error404.css',
})
export class Error404 {}
