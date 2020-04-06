import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeRoutingModule } from "./home-routing.module";
import { MainComponent } from "./containers/main/main.component";
import { FormComponent } from "./components/form/form.component";
import { AllCaseComponent } from "./components/all-case/all-case.component";
import { HttpClientModule } from "@angular/common/http";
import { HomeService } from "./services/home.service";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { NewsComponent } from "./components/news/news.component";
import { CarouselModule } from "ngx-bootstrap/carousel";
import { ModalModule } from "ngx-bootstrap/modal";
import { TimelineComponent } from './components/timeline/timeline.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [MainComponent, FormComponent, AllCaseComponent, NewsComponent, TimelineComponent, DashboardComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    HomeRoutingModule,
    NgxDatatableModule,
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
  ],
  providers: [HomeService],
})
export class HomeModule {}
