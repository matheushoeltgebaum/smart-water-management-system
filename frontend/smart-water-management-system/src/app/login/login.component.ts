import { AuthGuard } from "./../../common/auth.guard";
import { LoginService } from "./../service/login/login.service";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required)
  });

  showErrorMessage = false;
  loading = false;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private titleService: Title
  ) {
    this.titleService.setTitle("Login");
  }

  ngOnInit() {
    if (this.isLogged()) {
      this.router.navigate(["/yearly"]);
    }
  }

  login() {
    this.showErrorMessage = false;
    this.loading = true;
    let username = this.loginForm.value.username;
    let password = this.loginForm.value.password;

    const params = {
      login: username,
      password: password
    };

    this.loginService.login(params).subscribe(
      response => {
        let deviceId = response.body.deviceId;
        let token = response.body.token;
        localStorage.setItem("token", token);
        localStorage.setItem("deviceId", deviceId);
        this.loading = false;
        this.router.navigate(["/yearly"]);
      },
      error => {
        this.loading = false;
        this.showErrorMessage = true;
        console.log(error);
      }
    );
  }

  isLogged() {
    const auth = new AuthGuard(this.router);
    return auth.isLogged();
  }

  get username() {
    return this.loginForm.get("username");
  }

  get password() {
    return this.loginForm.get("password");
  }
}
