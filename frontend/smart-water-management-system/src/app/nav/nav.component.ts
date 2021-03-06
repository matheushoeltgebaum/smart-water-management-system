import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.scss"]
})
export class NavComponent implements OnInit {
  public navbarCollapsed = true;

  constructor(private router: Router) {}

  ngOnInit() {}

  logout() {
    localStorage.removeItem("deviceId");
    localStorage.removeItem("token");
    this.router.navigate(["/login"]);
  }
}
