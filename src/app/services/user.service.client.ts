import {Injectable} from '@angular/core';
import {cleanSession} from 'selenium-webdriver/safari';

@Injectable()
export class UserServiceClient {

  login(user) {
    return fetch('http://localhost:3000/api/login', {
      method: 'post',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    });
  }

  currentUser() {
    return fetch('http://localhost:3000/api/session/get', {
      credentials: 'include'
    }).then(response => response.json());
  }

  logout() {
    return fetch('http://localhost:3000/api/session/reset')
        .then(response => sessionStorage.clear());
  }

  createUser(user) {
    return fetch('http://localhost:3000/api/user', {
      method: 'post',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    });
  }

}
