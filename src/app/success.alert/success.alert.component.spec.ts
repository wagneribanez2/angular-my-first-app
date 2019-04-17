import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Success.AlertComponent } from './success.alert.component';

describe('Success.AlertComponent', () => {
  let component: Success.AlertComponent;
  let fixture: ComponentFixture<Success.AlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Success.AlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Success.AlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
