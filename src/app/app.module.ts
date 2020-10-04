import { EmployeeDetailsComponent } from './projects-table/employee-details/employee-details.component';
import { CalculatorModule } from './calculator/calculator.module';
import { ProjectsNavbarComponent } from './projects-table/projects-navbar/projects-navbar.component';
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
import { TableHeaderComponent } from './projects-table/table-header/table-header.component';
import { FormsModule } from '@angular/forms';
import { NewEmployeeComponent } from './projects-table/new-employee/new-employee.component';


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
    TableHeaderComponent,
    EmployeeDetailsComponent,
    NewEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalculatorModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
