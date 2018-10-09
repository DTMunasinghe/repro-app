import { SelfcareModule } from './selfcare.module';

describe('SelfcareModule', () => {
  let selfcareModule: SelfcareModule;

  beforeEach(() => {
    selfcareModule = new SelfcareModule();
  });

  it('should create an instance', () => {
    expect(selfcareModule).toBeTruthy();
  });
});
