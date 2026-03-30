import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { delay, debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { WebResource } from '../models/web-resource';
import { FilterOptions } from '../models/filter-options';
import { WEB_RESOURCES } from '../mock-data';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  private allItems: WebResource[] = [...WEB_RESOURCES];

  private itemsSubject$ = new BehaviorSubject<WebResource[] | null>(null);
  public items$ = this.itemsSubject$.asObservable();

  private filterSubject$ = new BehaviorSubject<FilterOptions>({
    query: '',
    category: 'All'
  });

  constructor() {
    of(this.allItems).pipe(delay(1000)).subscribe(data => {
      this.filterSubject$.next(this.filterSubject$.getValue());
    });

    this.filterSubject$.pipe(
      debounceTime(500),
      distinctUntilChanged((prev, curr) => JSON.stringify(prev) === JSON.stringify(curr)),
      map(options => {
        if (!this.allItems.length) return null;

        return this.allItems.filter(item => {
          const matchesQuery = item.title.toLowerCase().includes(options.query.toLowerCase());
          const matchesCategory = options.category === 'All' || item.type === options.category;
          return matchesQuery && matchesCategory;
        });
      })
    ).subscribe(filteredResult => {
      this.itemsSubject$.next(filteredResult);
    });
  }

  updateFilters(options: FilterOptions): void {
    this.filterSubject$.next(options);
  }

  deleteItem(id: string): void {
    this.allItems = this.allItems.filter(item => item.id !== id);

    const currentDisplayedItems = this.itemsSubject$.getValue();
    
    if (currentDisplayedItems) {
      const updatedItems = currentDisplayedItems.filter(item => item.id !== id);
      this.itemsSubject$.next(updatedItems);
    }
  }
  getById(id: string): Observable<WebResource | undefined> {
    const resource = this.allItems.find(item => item.id === id);
    return of(resource).pipe(delay(1000));
  }
}