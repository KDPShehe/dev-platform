import { Component, Input, Output, EventEmitter } from '@angular/core';
import { WebResource, ResourceType } from '../../models/web-resource';
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
  
  @Output() actionClick = new EventEmitter<string>();

  public ResourceType = ResourceType;

  onBtnClick() {
    this.actionClick.emit(this.resource.id);
  }
}