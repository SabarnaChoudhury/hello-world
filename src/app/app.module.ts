import { CalculatorModule } from './calculator/calculator.module';
import { ProjectsNavbarComponent } from './projects-navbar/projects-navbar.component';
import { KkrComponent } from './ipl/kkr.component';
import { HydComponent } from './ipl/hyd.component';
import { CskComponent } from './ipl/csk.component';
import { RcbComponent } from './ipl/rcb.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IplComponent } from './ipl/ipl.component';
import { ProjectsTableComponent } from './projects-table/projects-table.component';
import { TableHeaderComponent } from './table-header/table-header.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    IplComponent,
    RcbComponent,
    CskComponent,
    HydComponent,
    KkrComponent,
    ProjectsTableComponent,
    ProjectsNavbarComponent,
    TableHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalculatorModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }