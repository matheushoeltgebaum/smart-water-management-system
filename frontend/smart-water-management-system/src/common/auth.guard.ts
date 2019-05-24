import { Injectable } from "@angular/core";
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({ providedIn: "root" })
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.isLogged()) {
      return true;
    } else {
      this.router.navigate(["/login"]);
      return false;
    }
  }

  public isLogged() {
    let token = localStorage.getItem("token");
    let jwtHelper = new JwtHelperService();
    if (jwtHelper.isTokenExpired(token)) {
      localStorage.removeItem("deviceId");
      localStorage.removeItem("token");
      return false;
    } else {
      return true;
    }
  }
}
