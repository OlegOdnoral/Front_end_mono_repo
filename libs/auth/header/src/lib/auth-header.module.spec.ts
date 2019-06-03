import { async, TestBed } from '@angular/core/testing';
import { AuthHeaderModule } from './auth-header.module';

describe('AuthHeaderModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AuthHeaderModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AuthHeaderModule).toBeDefined();
  });
});
