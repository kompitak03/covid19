import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  rows = [];
  temp = [];

  columns = [
    { prop: "Date", name: "วันที่" },
    { prop: "Confirmed", name: "ยืนยันแล้ว" },
    { prop: "Recovered", name: "รักษาหายแล้ว" },
    { prop: "Hospitalized", name: "กำลังรักษา" },
    { prop: "Deaths", name: "เสียชีวิต" },
  ];

  @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.homeService.getTimeLine().then((res: any) => {
      if (res) {
        res.Data = res.Data.reverse();
        // cache our list
        this.temp = [...res.Data];

        // push our inital complete list
        this.rows = res.Data;
      }
    });
  }

}
