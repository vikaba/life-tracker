import {Injectable} from '@angular/core';

@Injectable()
export class BookServiceClient {

  findUserBooks(userId) {
    return fetch('http://localhost:3000/api/' + userId + '/books')
      .then(response => response.json);
  }

  addBook() {

  }

  changeBookStatus() {

  }

  deleteBook() {

  }

}
