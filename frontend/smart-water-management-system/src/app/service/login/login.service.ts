import { SmartWaterHeaders } from './../../../common/headers';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public http: HttpClient) { }

  public login(params) : Observable<any> {
    const body = JSON.stringify(params);
    const header = SmartWaterHeaders.get();
    return this.http.post(environment.serverUrl + '/sigfoxCredentials', body, header);
  }
}
