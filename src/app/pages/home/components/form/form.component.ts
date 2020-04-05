import { Component, OnInit } from "@angular/core";
import { HomeService } from "../../services/home.service";

@Component({
  selector: "home-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"]
})
export class FormComponent implements OnInit {
  constructor(private homeService: HomeService) {
    // this.homeService.getThailand().then(res => console.log(res));
    // this.homeService.getHistorical().then(res => console.log(res));
  }

  ngOnInit(): void {}
}
