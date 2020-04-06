import { Component, OnInit, TemplateRef } from "@angular/core";
import { HomeService } from "../../services/home.service";
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";

@Component({
  selector: "app-news",
  templateUrl: "./news.component.html",
  styleUrls: ["./news.component.scss"],
})
export class NewsComponent implements OnInit {
  news = [];
  newsMobile = [];
  modalRef: BsModalRef;
  onModal: any = {};

  constructor(
    private homeService: HomeService,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {
    this.homeService.getArea().then((res: any) => {
      this.newsMobile = res.Data;
      let mock = [];
      let w = 0;
      for (let i = 1; i < res.Data.length + 1; i++) {
        if (i == 1) {
          mock[w] = [];
        }
        mock[w].push(res.Data[i - 1]);
        if (i % 3 == 0) {
          w++;
          mock[w] = [];
        }
      }
      this.news = mock;
    });
  }

  openModal(template: TemplateRef<any>, index, index2) {
    this.modalRef = this.modalService.show(template, { class: "modal-xl" });
    if (index2 != "") {
      this.onModal = this.news[index][index2];
    } else {
      this.onModal = this.newsMobile[index];
    }
  }
}
