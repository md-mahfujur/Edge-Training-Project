import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AgGridListComponent } from './components/ag-grid-list/ag-grid-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'grid-list',
    component: AgGridListComponent,
  },
  {
    path: '',
    redirectTo: '/grid-list',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];
