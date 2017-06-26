import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrexchangeComponent } from './brexchange.component';

describe('BrexchangeComponent', () => {
  let component: BrexchangeComponent;
  let fixture: ComponentFixture<BrexchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrexchangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrexchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
