import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthSharedHeaderComponent } from './auth-shared-header.component';

describe('AuthSharedHeaderComponent', () => {
  let component: AuthSharedHeaderComponent;
  let fixture: ComponentFixture<AuthSharedHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthSharedHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthSharedHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
