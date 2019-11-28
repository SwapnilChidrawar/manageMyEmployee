import { ResuableModule } from './resuable.module';

describe('ResuableModule', () => {
  let resuableModule: ResuableModule;

  beforeEach(() => {
    resuableModule = new ResuableModule();
  });

  it('should create an instance', () => {
    expect(resuableModule).toBeTruthy();
  });
});
