import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  login() {
    let username = this.loginForm.value.username;
    let password = this.loginForm.value.password;
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    this.router.navigate(['/dashboard']);
  }

  get username() { return this.loginForm.get('username'); }

  get password() { return this.loginForm.get('password'); }

}
