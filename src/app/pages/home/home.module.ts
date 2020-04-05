import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeRoutingModule } from "./home-routing.module";
import { MainComponent } from "./containers/main/main.component";
import { FormComponent } from "./components/form/form.component";
import { AllCaseComponent } from "./components/all-case/all-case.component";
import { HttpClientModule } from "@angular/common/http";
import { HomeService } from "./services/home.service";
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  declarations: [MainComponent, FormComponent, AllCaseComponent],
  imports: [CommonModule, HttpClientModule, HomeRoutingModule, NgxDatatableModule],
  providers: [HomeService]
})
export class HomeModule {}
