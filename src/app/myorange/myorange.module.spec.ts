import { MyorangeModule } from './myorange.module';

describe('MyorangeModule', () => {
  let myorangeModule: MyorangeModule;

  beforeEach(() => {
    myorangeModule = new MyorangeModule();
  });

  it('should create an instance', () => {
    expect(myorangeModule).toBeTruthy();
  });
});
