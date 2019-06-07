import { async, TestBed } from '@angular/core/testing';
import { AuthSharedHeaderModule } from './auth-shared-header.module';

describe('AuthSharedHeaderModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AuthSharedHeaderModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AuthSharedHeaderModule).toBeDefined();
  });
});
