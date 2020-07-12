
import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color } from 'ng2-charts';
import { MultiDataSet, Label, SingleDataSet } from 'ng2-charts';
import { DeathsService } from '../deaths.service'
import { ChartOptions, ChartDataSets, RadialChartOptions } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  confirmed = 0;
  recovered = 0;
  deaths = 0;
  active = 0;


  items = [];
  confirmedItem = [];
  recoveredItem = [];
  deathItem = [];
  stateLabel = [];
  dataItem = [];
  activeItem = [];
  constructor(private deathsService: DeathsService) {
    this.deathsService.getAllDeaths().subscribe(
      data => {
        this.items = data;
        console.log(this.items[0].confirmed);
        for (let i = 0; i < data.length; i++) {
          this.stateLabel.push(this.items[i].provinceState);
          this.confirmedItem.push(this.items[i].confirmed);
          this.recoveredItem.push(this.items[i].recovered);
          this.deathItem.push(this.items[i].deaths);
          this.activeItem.push(this.items[i].active);
          this.confirmed = this.confirmed + this.items[i].confirmed;
          this.recovered = this.recovered + this.items[i].recovered;
          this.deaths = this.deaths + this.items[i].deaths;
          this.active = this.active + this.items[i].active;
        }
        this.dataItem.push(this.confirmed);
        this.dataItem.push(this.recovered);
        this.dataItem.push(this.deaths);
        this.dataItem.push(this.active)
        console.log(this.confirmed);
        console.log(this.recovered);
        console.log(this.deaths);
        console.log(this.items)
      },
      err => console.log("error", err),
      () => console.log("finally")
    )
  }
  doughnutChartLabels: Label[] = ['Confirmed', 'Recovered', 'Deaths', 'Active'];
  doughnutChartData: MultiDataSet = this.dataItem;
  doughnutChartType: ChartType = 'doughnut';
  doughnutChartColors: Color[] = [{backgroundColor:['rgba(159,204,0,0.5)', 'rgba(250,109,33,0.7)', 'rgba(0,139,139,0.7)','rgba(154,154,154,0.5)']}];

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
  ngOnInit(): void {
  }

}
