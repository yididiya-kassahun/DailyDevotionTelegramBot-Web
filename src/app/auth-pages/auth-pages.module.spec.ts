import { AuthPagesModule } from './auth-pages.module';

describe('AuthPagesModule', () => {
  let authPagesModule: AuthPagesModule;

  beforeEach(() => {
    authPagesModule = new AuthPagesModule();
  });

  it('should create an instance', () => {
    expect(authPagesModule).toBeTruthy();
  });
});
