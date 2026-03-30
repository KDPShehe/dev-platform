import { Component, OnInit, inject } from '@angular/core'; 
import { FormsModule } from '@angular/forms';
import { CardComponent } from '../../../shared/components/card/card'; 
import { WebResource, ResourceType } from '../../../shared/models/web-resource';
import { ResourceService } from '../../../shared/services/resource'; 

@Component({
  selector: 'dev-list',
  standalone: true,
  imports: [CardComponent, FormsModule],
  templateUrl: './list.html',
  styleUrls: ['./list.css']
})

export class ListComponent implements OnInit {
  private resourceService = inject(ResourceService);

  filteredResources: WebResource[] = [];
  
  searchQuery: string = '';
  selectedCategory: ResourceType | 'All' = 'All';
  resourceTypes = Object.values(ResourceType);

  ngOnInit(): void {
    this.filteredResources = this.resourceService.getAll();
  }

  filterItems(): void {
    this.filteredResources = this.resourceService.filterResources(this.searchQuery, this.selectedCategory);
  }

  resetFilters(inputElement: HTMLInputElement): void {
    this.searchQuery = '';
    this.selectedCategory = 'All';
    this.filteredResources = this.resourceService.getAll(); 
    inputElement.focus();
  }

  handleCardAction(id: string): void {
    this.resourceService.deleteItem(id);

    this.filterItems();
    
    console.log(`[DevSpace] Ресурс з ID: ${id} успішно видалено.`);
  }
}