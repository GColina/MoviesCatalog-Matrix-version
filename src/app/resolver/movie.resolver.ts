import { ResolveFn } from '@angular/router';
import { MovieService } from '../service/movie.service';
import { inject } from '@angular/core';
import { Movie } from '../model/movie';

export const movieResolver: ResolveFn<Movie | undefined> = (route, state) => {
  const movieService = inject(MovieService);

  const id = Number(route.paramMap.get('id'));

  return movieService.getMovieById(id);
};
