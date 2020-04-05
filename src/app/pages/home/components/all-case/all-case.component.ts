import { Component, OnInit, ViewChild } from "@angular/core";
import { HomeService } from "../../services/home.service";
import { Allcase } from "../../interfaces/allcase";
import { DatatableComponent } from "@swimlane/ngx-datatable";

@Component({
  selector: "home-all-case",
  templateUrl: "./all-case.component.html",
  styleUrls: ["./all-case.component.scss"],
})
export class AllCaseComponent implements OnInit {
  total;
  rows = [];
  rowsAllCase = [];

  temp = [];
  tempAllCase = [];

  columns = [
    { prop: "Date", name: "วันที่" },
    { prop: "Confirmed", name: "ยืนยันแล้ว" },
    { prop: "Recovered", name: "รักษาหายแล้ว" },
    { prop: "Hospitalized", name: "กำลังรักษา" },
    { prop: "Deaths", name: "เสียชีวิต" },
  ];

  columnsAllCase = [
    {
      prop: "ConfirmDate",
      name: "วันที่ยืนยัน",
    },
    {
      prop: "No",
      name: "รายที่",
    },
    {
      prop: "Age",
      name: "อายุ",
    },
    {
      prop: "Gender",
      name: "เพศ",
    },
    {
      prop: "Nation",
      name: "สัญชาติ",
    },
    {
      prop: "Province",
      name: "พบที่จังหวัด",
    },
    {
      prop: "District",
      name: "พบที่อำเภอ",
    },
  ];

  @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;
  @ViewChild(DatatableComponent, { static: false })
  tableAllCase: DatatableComponent;

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.onGetAllCase();
  }

  onGetAllCase() {
    this.homeService.getToday().then((res) => {
      this.total = res;
    });
    this.homeService.getTimeLine().then((res: any) => {
      if (res) {
        res.Data = res.Data.reverse();
        // cache our list
        this.temp = [...res.Data];

        // push our inital complete list
        this.rows = res.Data;
      }
    });
    this.homeService.getAllCase().then((res: any) => {
      if (res) {
        res.Data = res.Data;
        // cache our list
        this.tempAllCase = [...res.Data];

        // push our inital complete list
        this.rowsAllCase = res.Data;
      }
    });
    this.homeService.getAllCaseSum().then((res: any) => {
      console.log(res);
    });
    this.homeService.getArea().then((res: any) => {
      console.log(res);
    });
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function (d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }
}
