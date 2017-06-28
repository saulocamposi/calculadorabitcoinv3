import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersfoxbitComponent } from './ordersfoxbit.component';

describe('OrdersfoxbitComponent', () => {
  let component: OrdersfoxbitComponent;
  let fixture: ComponentFixture<OrdersfoxbitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersfoxbitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersfoxbitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
