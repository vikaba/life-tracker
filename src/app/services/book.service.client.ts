import {Injectable} from '@angular/core';

@Injectable()
export class BookServiceClient {

  findUserBooks(userId) {
    return fetch('http://localhost:3000/api/user/' + userId + '/book')
      .then(response => response.json);
  }

  addBookToUser(userId, name, author, status) {
    console.log(userId)
    const book = {
      name: name,
      author: author,
      status: status
    }
    return fetch('http://localhost:8080/api/user/' + userId + '/book', {
      body: JSON.stringify(book),
      credentials: 'include', // include, same-origin, *omit
      headers: {
        'content-type': 'application/json'
      },
      method: 'post'}).then(function (response) {
      return response.json();
    });
  }

  changeBookStatus() {

  }

  deleteBook() {

  }

}
