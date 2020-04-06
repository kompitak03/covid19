import { Component, OnInit } from "@angular/core";
import { HomeService } from "../../services/home.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  total;
  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.homeService.getToday().then((res) => {
      this.total = res;
    });
  }

  onCutMinus(num: number) {
    if (num >= 0) {
      return num;
    } else {
      return Math.abs(num);
    }
  }
}
