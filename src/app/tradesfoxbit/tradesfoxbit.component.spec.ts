import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradesfoxbitComponent } from './tradesfoxbit.component';

describe('TradesfoxbitComponent', () => {
  let component: TradesfoxbitComponent;
  let fixture: ComponentFixture<TradesfoxbitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradesfoxbitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradesfoxbitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
