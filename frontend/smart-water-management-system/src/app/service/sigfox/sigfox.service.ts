import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { WaterLevel } from 'src/app/model/water-level';
import { SmartWaterHeaders } from 'src/common/headers';

@Injectable({
  providedIn: "root"
})
export class SigfoxService {
  constructor(public http: HttpClient) {}

  public getYearlyDeviceMessages(filterDate: Date) {
    let deviceId = localStorage.getItem("deviceId");
    const body = {
      deviceId: deviceId,
      date: filterDate
    };
    const header = SmartWaterHeaders.getAuth(localStorage.getItem('token'));

    return this.http.post<WaterLevel[]>(environment.serverUrl + "/yearlyMessages", body, header);
  }

  public getMonthlyDeviceMessages(filterDate: Date) {
    let deviceId = localStorage.getItem('deviceId');
    const body = {
      deviceId: deviceId,
      date: filterDate
    };
    const header = SmartWaterHeaders.getAuth(localStorage.getItem('token'));

    return this.http.post<WaterLevel[]>(environment.serverUrl + '/monthlyMessages', body, header);
  }
}
