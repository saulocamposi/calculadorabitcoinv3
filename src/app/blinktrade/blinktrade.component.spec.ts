import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlinktradeComponent } from './blinktrade.component';

describe('BlinktradeComponent', () => {
  let component: BlinktradeComponent;
  let fixture: ComponentFixture<BlinktradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlinktradeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlinktradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
