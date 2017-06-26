import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolionexComponent } from './polionex.component';

describe('PolionexComponent', () => {
  let component: PolionexComponent;
  let fixture: ComponentFixture<PolionexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolionexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolionexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
