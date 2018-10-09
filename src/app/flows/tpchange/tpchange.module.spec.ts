import { TpchangeModule } from './tpchange.module';

describe('TpchangeModule', () => {
  let tpchangeModule: TpchangeModule;

  beforeEach(() => {
    tpchangeModule = new TpchangeModule();
  });

  it('should create an instance', () => {
    expect(tpchangeModule).toBeTruthy();
  });
});
