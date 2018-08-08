import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TrackerComponent } from './tracker/tracker.component';
import {UserServiceClient} from './services/user.service.client';
import {BookServiceClient} from './services/book.service.client';
import {ShowServiceClient} from './services/show.service.client';
import {MovieServiceClient} from './services/movies.service.client';
import {PlaceServiceClient} from './services/place.service.client';
import { MovieListComponent } from './movie-list/movie-list.component';
import { ShowListComponent } from './show-list/show-list.component';
import { BookListComponent } from './book-list/book-list.component';
import { PlacesComponent } from './places/places.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    TrackerComponent,
    MovieListComponent,
    ShowListComponent,
    BookListComponent,
    PlacesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [
    UserServiceClient,
    BookServiceClient,
    ShowServiceClient,
    MovieServiceClient,
    PlaceServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
