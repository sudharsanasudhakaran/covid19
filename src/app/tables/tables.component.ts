import { Component, OnInit } from '@angular/core';
import { DeathsService} from '../deaths.service';
import { Observable } from "rxjs";

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

items : any;
  constructor(private deathsService : DeathsService) {
    this.deathsService.getAllDeaths().subscribe(
      data => {
        this.items = data;
        console.log(this.items)
      },
      err => console.log("error",err),
      () => console.log("finally")
    )
  }

  ngOnInit(): void {
  }

}
