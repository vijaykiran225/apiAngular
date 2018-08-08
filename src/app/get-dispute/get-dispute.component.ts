import { Component, OnInit } from '@angular/core';
import { getDisputeData } from '../mock-data/mockGet';
import { GetDispute } from '../mock-data/getDispute';
@Component({
  selector: 'app-get-dispute',
  templateUrl: './get-dispute.component.html',
  styleUrls: ['./get-dispute.component.css']
})
export class GetDisputeComponent implements OnInit {

  aDispute: GetDispute;
  constructor() { }

  fillUpMockData(): void {
    this.aDispute = getDisputeData;
  }
  ngOnInit() {
    this.fillUpMockData();
  }

}
