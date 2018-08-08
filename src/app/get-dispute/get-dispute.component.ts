import { Component, OnInit } from '@angular/core';
import { GetDispute } from '../mock-data/getDispute';
import { ActivatedRoute } from '@angular/router';
import { DisputeApiServService } from '../dispute-api-serv.service';
@Component({
  selector: 'app-get-dispute',
  templateUrl: './get-dispute.component.html',
  styleUrls: ['./get-dispute.component.css']
})
export class GetDisputeComponent implements OnInit {

  aDispute: GetDispute;

  getPathId(): string {
    return this.route.snapshot.paramMap.get('id');
  }
  constructor(private route: ActivatedRoute,
    private disputeService: DisputeApiServService) { }

  fillUpActualData(): void {
    this.aDispute = this.disputeService.getDisputeByID(this.getPathId());
  }
  ngOnInit() {
    this.fillUpActualData();
  }

}
