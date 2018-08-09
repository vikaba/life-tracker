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
  currentUser;

  constructor(private movieService: MovieServiceClient,
              private bookService: BookServiceClient,
              private showService: ShowServiceClient,
              private placeService: PlaceServiceClient,
              private userService: UserServiceClient) {}

  ngOnInit() {
    this.currentUser = this.userService.currentUser().then((u) => {
      this.currentUser = u.currentUser;
    });
  }

  logout() {
    this.userService.logout().then((response) =>
    console.log('logged out'));
  }

  showBooks() {
    this.selectedType = 'books';
    this.bookService.findUserBooks(this.currentUser._id).then(books => this.books = books);
  }

  showShows() {
    this.selectedType = 'shows';
    this.showService.findUserShows().then(shows => this.shows = shows);
  }

  showMovies() {
    this.selectedType = 'movies';
    this.movieService.findUserMovies().then(movies => this.movies = movies);
  }

  showPlaces() {
    this.selectedType = 'places';
    this.placeService.findUserPlaces().then(places => this.places = places);
  }

}
