import { Component } from '@angular/core';
import { AppInfo } from '../../shared/models/appInfo';

@Component({
  selector: 'dev-footer',
  standalone: true,
  templateUrl: './footer.html',
  styleUrls: ['./footer.css']
})
export class FooterComponent {
  footerConfig: AppInfo = {
    title: 'DevSpace Web Solutions',
    year: new Date().getFullYear()
  };
}