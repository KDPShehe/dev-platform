import { Component } from '@angular/core';
import { AppInfo } from '../../shared/models/appInfo';

@Component({
  selector: 'dev-header',
  standalone: true,
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class HeaderComponent {
  headerConfig: AppInfo = {
    title: 'DevSpace: Платформа Web-розробника',
    year: 2026
  };
}