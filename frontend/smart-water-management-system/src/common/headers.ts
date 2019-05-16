import { HttpHeaders } from "@angular/common/http";

export class SmartWaterHeaders {
  static get() {
    const header = {
      headers: new HttpHeaders({
        "Content-Type": "application/json; charset=utf-8"
      }),
      observe: "response" as "body",
      responseType: "json" as "json"
    };

    return header;
  }

  static getAuth(authorization) {
    const header = {
      headers: new HttpHeaders({
        "Authorization": `Basic ${authorization}`
      }),
      observe: "response" as "body",
      responseType: "json" as "json"
    };

    return header;
  }
}
