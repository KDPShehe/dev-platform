import { Component } from '@angular/core';
import { CardComponent } from '../../../shared/components/card/card'; 
import { WebResource } from '../../../shared/models/web-resource';
import { WEB_RESOURCES } from '../../../shared/mock-data';

@Component({
  selector: 'dev-list',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './list.html',
  styleUrls: ['./list.css']
})
export class ListComponent {
  resourcesList: WebResource[] = WEB_RESOURCES;
}