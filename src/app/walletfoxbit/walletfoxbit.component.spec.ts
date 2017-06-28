import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletfoxbitComponent } from './walletfoxbit.component';

describe('WalletfoxbitComponent', () => {
  let component: WalletfoxbitComponent;
  let fixture: ComponentFixture<WalletfoxbitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletfoxbitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletfoxbitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
