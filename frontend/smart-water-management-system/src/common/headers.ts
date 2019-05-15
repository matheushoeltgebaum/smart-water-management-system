import { HttpHeaders } from "@angular/common/http";

const OBSERVE = "response";
const RESPONSE_TYPE = "json";

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
}
