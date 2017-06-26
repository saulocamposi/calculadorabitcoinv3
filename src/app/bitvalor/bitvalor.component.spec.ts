import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BitvalorComponent } from './bitvalor.component';

describe('BitvalorComponent', () => {
  let component: BitvalorComponent;
  let fixture: ComponentFixture<BitvalorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BitvalorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BitvalorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
