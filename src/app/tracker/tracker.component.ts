import { Component, OnInit } from '@angular/core';
import {MovieServiceClient} from '../services/movies.service.client';
import {BookServiceClient} from '../services/book.service.client';
import {ShowServiceClient} from '../services/show.service.client';
import {PlaceServiceClient} from '../services/place.service.client';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.css']
})
export class TrackerComponent implements OnInit {

  selectedType;
  places;
  movies;
  books;
  shows;
  currentUsername;

  constructor(private movieService: MovieServiceClient,
              private bookService: BookServiceClient,
              private showService: ShowServiceClient,
              private placeService: PlaceServiceClient,
              private userService: UserServiceClient) {}

  ngOnInit() {
    this.currentUsername = this.userService.currentUser().then((u) => {
      this.currentUsername = u.currentUser.username;
    });
  }

  logout() {
    this.userService.logout().then((response) =>
    console.log('logged out'));
  }

  showBooks() {
    this.selectedType = 'books';
    this.books = this.bookService.findUserBooks();
  }

  showShows() {
    this.selectedType = 'shows';
    this.shows = this.showService.findUserShows();
  }

  showMovies() {
    this.selectedType = 'movies';
    this.movies = this.movieService.findUserMovies();
  }

  showPlaces() {
    this.selectedType = 'places';
    this.places = this.placeService.findUserPlaces();
  }

}
