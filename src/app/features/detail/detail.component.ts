import { Component, inject, Inject } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { Movie } from '../../model/movie';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [RouterLink,RouterModule],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css',
})
export class DetailComponent {
  movie!: Movie;

  private route = inject(ActivatedRoute)


  ngOnInit(){
    this.movie = this.route.snapshot.data['movie']
  }
}
