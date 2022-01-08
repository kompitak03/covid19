import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { pipe, from } from "rxjs";
import { filter, map, flatMap, single } from "rxjs/operators";

const api = "https://covid19.ddc.moph.go.th/api/Cases";

@Injectable({
  providedIn: "root",
})
export class HomeService {
  constructor(private httpClient: HttpClient) {}

  getToday() {
    return this.httpClient.get(`${api}/today-cases-all`).toPromise();
  }

  getTimeLine() {
    return this.httpClient.get(`${api}/timeline-cases-all`).toPromise();
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
