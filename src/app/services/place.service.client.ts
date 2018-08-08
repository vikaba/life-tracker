import {Injectable} from '@angular/core';

@Injectable()
export class PlaceServiceClient {

  findUserPlaces() {
    return fetch('http://localhost:3000/api/places')
      .then(response => response.json);
  }

  addPlace() {

  }

  changePlaceStatus() {

  }

  deletePlace() {

  }
}
