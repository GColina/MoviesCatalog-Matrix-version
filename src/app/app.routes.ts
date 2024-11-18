import { Routes } from '@angular/router';
import { movieResolver } from './resolver/movie.resolver';
import { MovieListComponent } from './features/movie-list/movie-list.component';
import { DetailComponent } from './features/detail/detail.component';
import { HomeComponent } from './features/home/home.component';

export const routes: Routes = [
  {
    path: 'movie-list',
    component: MovieListComponent,
  },

  {
    path: 'movie-list/:id',
    component: DetailComponent,
    resolve: {movie: movieResolver}
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
