import { RoutingDisputesModule } from './routing-disputes.module';

describe('RoutingDisputesModule', () => {
  let routingDisputesModule: RoutingDisputesModule;

  beforeEach(() => {
    routingDisputesModule = new RoutingDisputesModule();
  });

  it('should create an instance', () => {
    expect(routingDisputesModule).toBeTruthy();
  });
});
