import { Component, OnInit, ViewChild } from "@angular/core";
import { HomeService } from "../../services/home.service";
import { DatatableComponent } from "@swimlane/ngx-datatable";

@Component({
  selector: "home-all-case",
  templateUrl: "./all-case.component.html",
  styleUrls: ["./all-case.component.scss"],
})
export class AllCaseComponent implements OnInit {
  rowsAllCase = [];
  tempAllCase = [];

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

  @ViewChild(DatatableComponent, { static: false })
  tableAllCase: DatatableComponent;

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.onGetAllCase();
  }

  onGetAllCase() {
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
}
