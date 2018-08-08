import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  username: String;
  password: String;
  constructor(private router: Router,
              private userService: UserServiceClient) { }

  ngOnInit() {
  }

  login(username, password) {
    const user = {
      username: username,
      password: password
    };
    const router = this.router;
    this.userService.login(user)
      .then(function(u) {
        if (u.status !== 401) {
          router.navigate(['tracker']);
        } else {
          alert('wrong username or password');
        }
      });
  }

}
