import { Component, OnInit , Input } from '@angular/core';
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

  webToken: string;

  listDisputes: ListDisputes;
  constructor(private route: ActivatedRoute,
    private disputeService: DisputeApiServService) { }

  fillUpActualData(): void {
    console.log('filled up search data with token' + this.webToken);
    this.disputeService.getDisputes().subscribe(data => this.listDisputes = data);
  }
  ngOnInit() {
    this.updateToken();
    this.fillUpActualData();
  }
  updateToken(): void {
    this.disputeService.currentToken.subscribe(data => this.webToken = data);
  }
  refresh(userToken: string): void {
    this.disputeService.updateToken(userToken);
    this.fillUpActualData();
  }
}
