import { SmartWaterHeaders } from './../../../common/headers';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SigfoxService {

  constructor(public http: HttpClient) { }

  public getDevice() {
    var auth = localStorage.getItem('auth');
    const body = {
      auth: auth
    };
    return this.http.post(environment.serverUrl + '/sigfoxDevice', body);
  }

  public getDeviceMessages() {

  }
}
