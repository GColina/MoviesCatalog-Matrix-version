import { Injectable } from '@angular/core';
import { Movie } from '../model/movie';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  movieList: Movie[] = [
    {
      id: 0,
      title: 'Avatar',
      description:
        'Un exmarine se embarca en una aventura en el planeta Pandora para salvarlo de una invasión humana.',
      image:
        'https://hips.hearstapps.com/hmg-prod/images/avatar-66ca0a9027f05.jpg?crop=1xw:1xh;center,top&resize=980:*',
      date: new Date('2009/12/18'),
      genre: 'CF', // Género de Avatar
    },
    {
      id: 1,
      title: 'The Dark Knight',
      description:
        'Batman enfrenta al Joker, un criminal caótico que amenaza la seguridad de Gotham City.',
      image:
        'https://image.tmdb.org/t/p/original/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
      date: new Date('2008/07/18'),
      genre: 'Drm', // Géneros de The Dark Knight
    },
    {
      id: 2,
      title: 'Inception',
      description:
        'Un ladrón especializado en infiltrarse en los sueños es reclutado para plantar una idea en la mente de un empresario.',
      image:
        'https://image.tmdb.org/t/p/original/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg',
      date: new Date('2010/07/16'),
      genre: 'CF', // Géneros de Inception
    },
    {
      id: 3,
      title: 'Interstellar',
      description:
        'Un grupo de exploradores viaja a través de un agujero de gusano para salvar a la humanidad.',
      image:
        'https://image.tmdb.org/t/p/original/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg',
      date: new Date('2014/11/07'),
      genre: 'CF', // Géneros de Interstellar
    },
    {
      id: 4,
      title: 'Parasite',
      description:
        'Una familia pobre se infiltra en la vida de una familia rica, lo que lleva a consecuencias inesperadas.',
      image:
        'https://image.tmdb.org/t/p/original/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg',
      date: new Date('2019/05/30'),
      genre: 'Drm', // Géneros de Parasite
    },
    {
      id: 5,
      title: 'The Matrix',
      description:
        'Un hacker descubre la realidad simulada en la que vive y se une a la resistencia contra las máquinas.',
      image:
        'https://image.tmdb.org/t/p/original/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
      date: new Date('1999/03/31'),
      genre: 'CF', // Géneros de The Matrix
    },
  ];

  getMovieList(): Observable<Movie[]> {
    return of(this.movieList);
  }

  getMovieById(id: number): Movie | undefined {
    return this.movieList.find((movie) => movie.id === id);
  }
}
