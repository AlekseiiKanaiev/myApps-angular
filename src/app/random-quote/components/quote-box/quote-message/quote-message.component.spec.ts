import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteMessageComponent } from './quote-message.component';

describe('QuoteMessageComponent', () => {
  let component: QuoteMessageComponent;
  let fixture: ComponentFixture<QuoteMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
