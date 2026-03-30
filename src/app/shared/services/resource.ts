import { Injectable } from '@angular/core';
import { WebResource, ResourceType } from '../models/web-resource';
import { WEB_RESOURCES } from '../mock-data';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  private items: WebResource[] = [...WEB_RESOURCES];

  getAll(): WebResource[] {
    return [...this.items];
  }

  getById(id: string): WebResource | undefined {
    return this.items.find(item => item.id === id);
  }

  deleteItem(id: string): void {
    this.items = this.items.filter(item => item.id !== id);
  }

  filterResources(query: string, category: ResourceType | 'All'): WebResource[] {
    const lowerQuery = query.toLowerCase().trim();
    
    return this.items.filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(lowerQuery);
      const matchesCategory = category === 'All' || item.type === category;
      return matchesSearch && matchesCategory;
    });
  }
}