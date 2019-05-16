import { Component, OnInit, Input } from "@angular/core";
import { SigfoxService } from "../service/sigfox/sigfox.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  constructor(private sigfoxService: SigfoxService) {}

  ngOnInit() {
    this.sigfoxService.getDevice().subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
  }
}
