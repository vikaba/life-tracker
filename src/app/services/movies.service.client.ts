import {Injectable} from '@angular/core';

@Injectable()
export class MovieServiceClient {

  findUserMovies() {
    return fetch('http://localhost:3000/api/movies')
      .then(response => response.json);
  }

  addMovie() {

  }

  changeMovieStatus() {

  }

  deleteMovie() {

  }
}
