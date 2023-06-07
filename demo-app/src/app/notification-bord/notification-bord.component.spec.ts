import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationBordComponent } from './notification-bord.component';

describe('NotificationBordComponent', () => {
  let component: NotificationBordComponent;
  let fixture: ComponentFixture<NotificationBordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationBordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationBordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
