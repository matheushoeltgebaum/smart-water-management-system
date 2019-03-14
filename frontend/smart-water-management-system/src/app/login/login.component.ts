import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor() { }

  ngOnInit() {
  }

  login() {
    let username = this.loginForm.value.username;
    let password = this.loginForm.value.password;

    localStorage.setItem('userId', '5c882843e833d936baff9d47');
    localStorage.setItem('password', 'a8dae2c3ad1119923f9742eda3a525d4');
  }

}
