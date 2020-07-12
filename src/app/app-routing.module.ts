import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ChartsComponent } from "./charts/charts.component";
import { TablesComponent } from "./tables/tables.component";
import {NavbarComponent} from "./navbar/navbar.component";
const routes: Routes = [
  {
    path: "dashboard",
    component: DashboardComponent,
  },
  {
    path: "charts",
    component: ChartsComponent,
  },
  {
    path: "tables",
    component: TablesComponent,
  },
  {
    path : "navbar",
    component : NavbarComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
