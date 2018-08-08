import { RouutingDisputesModule } from './rouuting-disputes.module';

describe('RouutingDisputesModule', () => {
  let rouutingDisputesModule: RouutingDisputesModule;

  beforeEach(() => {
    rouutingDisputesModule = new RouutingDisputesModule();
  });

  it('should create an instance', () => {
    expect(rouutingDisputesModule).toBeTruthy();
  });
});
