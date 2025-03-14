import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DetailsComponent } from './pages/details/details.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { AgCharts } from 'ag-charts-angular';
@NgModule({
  declarations: [
         AppComponent,
         HomeComponent,
         NotFoundComponent,
         DetailsComponent,
         HeaderComponent,
         FooterComponent
        ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgCharts,
    DashboardComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
