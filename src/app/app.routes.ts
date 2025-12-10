import { Routes } from '@angular/router';
import { SearchResultsComponent } from './search-results/search-results';
import { PlayerView } from './player-view/player-view';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/search',
    pathMatch: 'full'
  },
  {
    path: 'search',
    component: SearchResultsComponent
  },
  {
    path: 'player',
    component: PlayerView
  },
  {
    path: '**',
    redirectTo: '/search'
  }
];