import { Component, Input } from '@angular/core';
import { WebResource } from '../../models/web-resource';
import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common'; 

@Component({
  selector: 'dev-card',
  standalone: true,
  imports: [CurrencyPipe, DatePipe, UpperCasePipe],
  templateUrl: './card.html',
  styleUrls: ['./card.css']
})
export class CardComponent {
  @Input({ required: true }) resource!: WebResource; 
}