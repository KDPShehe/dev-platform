import { ResourceType } from './web-resource';

export interface FilterOptions {
  query: string;
  category: ResourceType | 'All';
}