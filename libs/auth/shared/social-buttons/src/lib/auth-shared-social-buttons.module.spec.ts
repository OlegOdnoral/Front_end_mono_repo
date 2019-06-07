import { async, TestBed } from '@angular/core/testing';
import { AuthSharedSocialButtonsModule } from './auth-shared-social-buttons.module';

describe('AuthSharedSocialButtonsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AuthSharedSocialButtonsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AuthSharedSocialButtonsModule).toBeDefined();
  });
});
