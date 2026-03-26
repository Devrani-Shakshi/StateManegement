import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalRdemo } from './signal-rdemo';

describe('SignalRdemo', () => {
  let component: SignalRdemo;
  let fixture: ComponentFixture<SignalRdemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalRdemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalRdemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
