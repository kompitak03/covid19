import { TodayCaseByProvinces } from './../../interfaces/today-case-by-provinces';
import { Component, OnInit, ViewChild } from "@angular/core";
import { HomeService } from "../../services/home.service";
import { DatatableComponent } from "@swimlane/ngx-datatable";

@Component({
  selector: "home-all-case",
  templateUrl: "./all-case.component.html",
  styleUrls: ["./all-case.component.scss"],
})
export class AllCaseComponent implements OnInit {
  rowsAllCase: TodayCaseByProvinces[] = [];
  tempAllCase = [];
  allProvinces = [];
  selectedProvinces = [];
  updatedDate = new Date();

  columnsAllCase = [
    {
      prop: "new_case",
      name: "รายใหม่",
    },
    {
      prop: "new_death",
      name: "เสียชีวิต",
    },
    {
      prop: "province",
      name: "จังหวัด",
    },
    {
      prop: "total_case",
      name: "ทั้งหมด",
    },
    {
      prop: "total_death",
      name: "เสียชีวิตทั้งหมด",
    },
  ];

  @ViewChild(DatatableComponent, { static: false })
  tableAllCase: DatatableComponent;

  constructor(private homeService: HomeService) { }

  async ngOnInit() {

    let selectedProvinces = localStorage.getItem("selectedProvinces");
    if (selectedProvinces) {
      this.selectedProvinces = JSON.parse(selectedProvinces);
    } else {
      localStorage.setItem("selectedProvinces", "[]");
    }
    await this.onGetAllCase();
    await this.updateAllCase();

  }

  async onGetAllCase() {

    await this.homeService.getTodayCaseByProvinces().then((res: TodayCaseByProvinces[]) => {
      if (res) {
        this.updatedDate = new Date(res[0].update_date);
        this.allProvinces = res.map(data => data.province);
        this.rowsAllCase = res;
        this.tempAllCase = res;
      }
    });

  }

  onChange(province: string, isChecked: boolean) {
    if (isChecked) {
      this.selectedProvinces.push(province);
      localStorage.setItem("selectedProvinces", JSON.stringify(this.selectedProvinces));
    } else {
      let index = this.selectedProvinces.indexOf(province);
      this.selectedProvinces.splice(index, 1);
      localStorage.setItem("selectedProvinces", JSON.stringify(this.selectedProvinces));
    }

    this.updateAllCase();

  }

  updateAllCase() {

    this.rowsAllCase = this.tempAllCase.filter((data) => {

      if (this.selectedProvinces.length === 0) {
        return this.tempAllCase;
      } else {
        return this.selectedProvinces.includes(data.province);
      }

    });
  }

}
