import { SmartWaterHeaders } from "./../../../common/headers";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { WaterLevel } from 'src/app/model/water-level';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class SigfoxService {
  constructor(public http: HttpClient) {}

  public getDeviceMessages(filterDate: Date) {
    let deviceId = localStorage.getItem("deviceId");
    const body = {
      deviceId: deviceId,
      date: filterDate
    };

    return this.http.post<WaterLevel[]>(environment.serverUrl + "/messages", body);
  }
}
