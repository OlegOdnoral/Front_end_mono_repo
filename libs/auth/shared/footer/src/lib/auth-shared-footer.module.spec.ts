import { async, TestBed } from '@angular/core/testing';
import { AuthSharedFooterModule } from './auth-shared-footer.module';

describe('AuthSharedFooterModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AuthSharedFooterModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AuthSharedFooterModule).toBeDefined();
  });
});
