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
    { prop: "txn_date", name: "วันที่" },
    { prop: "new_case", name: "รายใหม่"},
    { prop: "new_recovered", name: "รักษาหายแล้ว" },
    { prop: "new_death", name: "เสียชีวิต" },
  ];

  @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.homeService.getTimeLine().then((res: any) => {
      if (res) {
        res = res.reverse();
        // cache our list
        this.temp = [...res];

        // push our inital complete list
        this.rows = res;
      }
    });
  }

}
