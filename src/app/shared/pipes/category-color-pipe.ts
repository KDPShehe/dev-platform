import { Pipe, PipeTransform } from '@angular/core';
import { ResourceType } from '../models/web-resource';

@Pipe({
  name: 'categoryColor',
  standalone: true
})
export class CategoryColorPipe implements PipeTransform {
  transform(value: ResourceType | string): string {
    switch (value) {
      case ResourceType.Template:
        return '#8b5cf6';
      case ResourceType.Plugin:
        return '#0ea5e9';
      case ResourceType.Course:
        return '#f59e0b';
      default:
        return '#64748b';
    }
  }
}