import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/header/header'; 
import { FooterComponent } from './core/footer/footer';

@Component({
  selector: 'dev-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent], 
  templateUrl: './app.html', 
  styleUrls: ['./app.css']
})
export class App {
  title = 'dev-platform';
}