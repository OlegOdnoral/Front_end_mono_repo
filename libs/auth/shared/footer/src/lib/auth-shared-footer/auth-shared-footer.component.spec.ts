import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthSharedFooterComponent } from './auth-shared-footer.component';

describe('AuthSharedFooterComponent', () => {
  let component: AuthSharedFooterComponent;
  let fixture: ComponentFixture<AuthSharedFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthSharedFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthSharedFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
