import { Component, OnInit, Input } from '@angular/core';
import { GetDispute } from '../mock-data/getDispute';
import { ActivatedRoute } from '@angular/router';
import { DisputeApiServService } from '../dispute-api-serv.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-get-dispute',
  templateUrl: './get-dispute.component.html',
  styleUrls: ['./get-dispute.component.css']
})
export class GetDisputeComponent implements OnInit {

  aDispute: GetDispute;

  @Input() webToken: string;

  getPathId(): string {
    return this.route.snapshot.paramMap.get('id');
  }
  constructor(private route: ActivatedRoute,
    private disputeService: DisputeApiServService,
    private location: Location) { }

  fillUpActualData(): void {
    console.log('about to call das get');
    this.disputeService.getDisputeByID(this.getPathId())
    .subscribe(data => this.aDispute = data);
  }
  ngOnInit() {
    this.updateToken();
    this.fillUpActualData();
  }

  go_back(): void {
    this.location.back();
  }

  updateToken(): void {
    this.disputeService.currentToken.subscribe(data => this.webToken = data);
  }
  refresh(userToken: string): void {
    this.disputeService.updateToken(userToken);
    this.fillUpActualData();

  }
}
