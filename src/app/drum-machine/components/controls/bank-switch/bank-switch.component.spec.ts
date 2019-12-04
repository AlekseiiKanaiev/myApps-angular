import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankSwitchComponent } from './bank-switch.component';

describe('BankSwitchComponent', () => {
  let component: BankSwitchComponent;
  let fixture: ComponentFixture<BankSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankSwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
