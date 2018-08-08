import { Injectable } from '@angular/core';
import { ListDisputes } from './mock-data/listDisputes';
import { GetDispute } from './mock-data/getDispute';
import { getDisputeData } from './mock-data/mockGet';
import { list } from './mock-data/mockSearch';
@Injectable({
  providedIn: 'root'
})
export class DisputeApiServService {

  constructor() { }

  getDisputes(): ListDisputes {
    return list;
  }

  getDisputeByID(disputeId: string): GetDispute {
    const x: GetDispute = getDisputeData;
    x.dispute_id = disputeId;

    return getDisputeData;
  }
}
