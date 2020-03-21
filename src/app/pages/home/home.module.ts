import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeRoutingModule } from "./home-routing.module";
import { MainComponent } from './containers/main/main.component';
import { FormComponent } from './components/form/form.component';

@NgModule({
  declarations: [MainComponent, FormComponent],
  imports: [CommonModule, HomeRoutingModule]
})
export class HomeModule {}
