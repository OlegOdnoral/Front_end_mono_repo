import { async, TestBed } from '@angular/core/testing';
import { AuthSignupModule } from './auth-signup.module';

describe('AuthSignupModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AuthSignupModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AuthSignupModule).toBeDefined();
  });
});
