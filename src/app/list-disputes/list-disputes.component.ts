import { Component, OnInit } from '@angular/core';
import { ListDisputes } from '../mock-data/listDisputes';
import { list } from '../mock-data/mockSearch';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { DisputeApiServService } from '../dispute-api-serv.service';

@Component({
  selector: 'app-list-disputes',
  templateUrl: './list-disputes.component.html',
  styleUrls: ['./list-disputes.component.css']
})
export class ListDisputesComponent implements OnInit {

  listDisputes: ListDisputes;
  constructor(private route: ActivatedRoute,
    private disputeService: DisputeApiServService) { }

  fillUpActualData(): void {
    this.listDisputes = this.disputeService.getDisputes();
  }
  ngOnInit() {
    this.fillUpActualData();
  }

}
