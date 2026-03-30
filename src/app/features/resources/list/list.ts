import { Component, OnInit, inject } from '@angular/core'; 
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { CardComponent } from '../../../shared/components/card/card'; 
import { WebResource, ResourceType } from '../../../shared/models/web-resource';
import { ResourceService } from '../../../shared/services/resource';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'dev-list',
  standalone: true,
  imports: [RouterLink, CardComponent, FormsModule, CommonModule],
  templateUrl: './list.html',
  styleUrls: ['./list.css']
})
export class ListComponent implements OnInit {
  private resourceService = inject(ResourceService);

  resources$!: Observable<WebResource[] | null>;
  
  searchQuery: string = '';
  selectedCategory: ResourceType | 'All' = 'All';
  resourceTypes = Object.values(ResourceType);

  ngOnInit(): void {
    this.resources$ = this.resourceService.items$;
  }

  filterItems(): void {
    this.resourceService.updateFilters({
      query: this.searchQuery,
      category: this.selectedCategory as ResourceType | 'All'
    });
  }

  resetFilters(inputElement: HTMLInputElement): void {
    this.searchQuery = '';
    this.selectedCategory = 'All';
    this.filterItems();
    inputElement.focus();
  }

  handleCardAction(id: string): void {
    this.resourceService.deleteItem(id);
  }
}