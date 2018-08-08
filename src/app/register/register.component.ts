import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username: String;
  confirmPassword: String;
  password: String;

  constructor(private router: Router,
              private userService: UserServiceClient) { }

  ngOnInit() {
  }

  register(username, confirmPassword, password) {
    if (confirmPassword !== password) {
      alert('passwords do not match');
    } else {
      const user = {
        username: username,
        password: password
      };
      const router = this.router;
      this.userService.createUser(user)
        .then(function(u) {
          if (u.status !== 409) {
            router.navigate(['tracker']);
          } else {
            alert('user with those credentials already exists');
          }
        });
    }
  }

}
