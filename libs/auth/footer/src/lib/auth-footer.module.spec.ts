import { async, TestBed } from '@angular/core/testing';
import { AuthFooterModule } from './auth-footer.module';

describe('AuthFooterModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AuthFooterModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AuthFooterModule).toBeDefined();
  });
});
