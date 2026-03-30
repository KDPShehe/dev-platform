import { Component, Input, Output, EventEmitter } from '@angular/core';
import { WebResource, ResourceType } from '../../models/web-resource';
import { TruncatePipe } from '../../pipes/truncate-pipe';
import { CommonModule, CurrencyPipe, DatePipe} from '@angular/common';
import { CategoryColorPipe } from '../../pipes/category-color-pipe';
import { HighlightDirective } from '../../directives/highlight';

@Component({
  selector: 'dev-card',
  standalone: true,
  imports: [CommonModule, CurrencyPipe, DatePipe, TruncatePipe, CategoryColorPipe, HighlightDirective],
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