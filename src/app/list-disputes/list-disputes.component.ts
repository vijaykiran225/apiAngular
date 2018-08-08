import { Component, OnInit } from '@angular/core';
import { ListDisputes } from '../mock-data/listDisputes';
import { list } from '../mock-data/mockSearch';

@Component({
  selector: 'app-list-disputes',
  templateUrl: './list-disputes.component.html',
  styleUrls: ['./list-disputes.component.css']
})
export class ListDisputesComponent implements OnInit {

  listDisputes: ListDisputes;
  constructor() { }

  fillUpMockData(): void {
    this.listDisputes = list;
  }

  ngOnInit() {
    this.fillUpMockData();
  }

}
