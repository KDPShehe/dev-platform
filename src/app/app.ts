import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/header/header'; 
import { FooterComponent } from './core/footer/footer';
import { ListComponent } from './features/resources/list/list';

@Component({
  selector: 'dev-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, ListComponent], 
  templateUrl: './app.html', 
  styleUrls: ['./app.css']
})
export class App {
  title = 'dev-platform';
}