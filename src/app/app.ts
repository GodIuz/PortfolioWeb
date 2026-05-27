import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./navbar/navbar";
import { Footer } from "./footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 
}
