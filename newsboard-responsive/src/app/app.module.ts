import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { RxjsStudyComponent } from "./rxjs-study/rxjs-study.component";
import { SearchcomponentComponent } from "./searchcomponent/searchcomponent.component";
import { ConfigServiceProvider } from "./configuration/config.service.provider";
import { DashboardModule } from "./dashboard/dashboard.module";
import { CssPositionComponent } from './css-position/css-position.component';
import { NomediaqueryComponent } from './nomediaquery/nomediaquery.component';
import { NewsboardComponent } from './newsboard/newsboard.component';
import { SwiperjsComponent } from './swiperjs/swiperjs.component';
import { ZdogComponent } from './zdog/zdog.component';
import { CsslineargradientComponent } from './csslineargradient/csslineargradient.component';
import { CssExperimentComponent } from './css-experiment/css-experiment.component';

@NgModule({
  declarations: [AppComponent, RxjsStudyComponent, SearchcomponentComponent, CssPositionComponent, NomediaqueryComponent, NewsboardComponent, SwiperjsComponent, ZdogComponent, CsslineargradientComponent, CssExperimentComponent],
  imports: [BrowserModule, AppRoutingModule, DashboardModule],
  providers: [ConfigServiceProvider],
  bootstrap: [AppComponent]
})
export class AppModule {}
