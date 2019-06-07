import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthSharedSocialButtonsComponent } from './auth-shared-social-buttons.component';

describe('AuthSharedSocialButtonsComponent', () => {
  let component: AuthSharedSocialButtonsComponent;
  let fixture: ComponentFixture<AuthSharedSocialButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthSharedSocialButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthSharedSocialButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
