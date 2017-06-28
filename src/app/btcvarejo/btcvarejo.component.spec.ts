import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtcvarejoComponent } from './btcvarejo.component';

describe('BtcvarejoComponent', () => {
  let component: BtcvarejoComponent;
  let fixture: ComponentFixture<BtcvarejoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtcvarejoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtcvarejoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
