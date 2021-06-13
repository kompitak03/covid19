import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { pipe, from } from "rxjs";
import { filter, map, flatMap, single } from "rxjs/operators";

const api = "https://covid19.th-stat.com/json/covid19v2/";

@Injectable({
  providedIn: "root",
})
export class HomeService {
  constructor(private httpClient: HttpClient) {}

  getToday() {
    return this.httpClient.get(api + "getTodayCases.json").toPromise();
  }

  getTimeLine() {
    return this.httpClient.get(api + "getTimeline.json").toPromise();
  }

  getAllCase() {
    return this.httpClient.get(api + "getSumCases.json").toPromise();
  }

  getAllCaseSum() {
    return this.httpClient.get(api + "cases/sum").toPromise();
  }

  getArea() {
    return this.httpClient.get(api + "area").toPromise();
  }
}
