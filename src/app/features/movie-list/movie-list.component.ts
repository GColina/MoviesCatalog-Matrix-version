import { CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GnrePipe } from '../../gnre.pipe';
import { MovieService } from '../../service/movie.service';
import { Movie } from '../../model/movie';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [RouterLink, CommonModule, DatePipe, GnrePipe],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css',
})
export class MovieListComponent {
  movieList: Movie[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movieService.getMovieList().subscribe((servMovList) => {
      this.movieList = servMovList;
    });
  }
}
