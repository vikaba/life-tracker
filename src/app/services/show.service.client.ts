import {Injectable} from '@angular/core';

@Injectable()
export class ShowServiceClient {

  findUserShows() {
    return fetch('http://localhost:3000/api/shows')
      .then(response => response.json);
  }

  addShow() {

  }

  changeShowStatus() {

  }

  deleteShow() {

  }
}
