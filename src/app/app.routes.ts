import { Routes } from '@angular/router';
import { ListComponent } from './features/resources/list/list';
import { DetailsComponent } from './features/resources/details/details';
import { NotFoundComponent } from './core/pages/not-found/not-found';
import { ResourceFormComponent } from './features/resources/resource-form/resource-form';

export const routes: Routes = [
  { path: '', redirectTo: 'resources', pathMatch: 'full' },

  { path: 'resources', component: ListComponent },

  { path: 'resource/new', component: ResourceFormComponent },

  { path: 'resource/:id', component: DetailsComponent },

  { path: '**', component: NotFoundComponent },
];