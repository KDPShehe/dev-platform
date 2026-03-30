import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardComponent } from '../../../shared/components/card/card'; 
import { WebResource, ResourceType } from '../../../shared/models/web-resource';
import { WEB_RESOURCES } from '../../../shared/mock-data';

@Component({
  selector: 'dev-list',
  standalone: true,
  imports: [CardComponent, FormsModule],
  templateUrl: './list.html',
  styleUrls: ['./list.css']
})
export class ListComponent {
  allResources: WebResource[] = WEB_RESOURCES;
  filteredResources: WebResource[] = [...this.allResources];

  searchQuery: string = '';
  selectedCategory: ResourceType | 'All' = 'All';

  resourceTypes = Object.values(ResourceType);

  filterItems() {
    const query = this.searchQuery.toLowerCase().trim();

    this.filteredResources = this.allResources.filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(query);

      const matchesCategory = this.selectedCategory === 'All' || item.type === this.selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }

  resetFilters(inputElement: HTMLInputElement) {
    this.searchQuery = '';
    this.selectedCategory = 'All';
    this.filteredResources = [...this.allResources];

    inputElement.focus();
  }

  handleCardAction(id: string) {
    console.log(`[DevSpace Action] Користувач натиснув кнопку на ресурсі з ID: ${id}`);
    alert(`Ресурс з ID: ${id} успішно оброблено!`);
  }
}