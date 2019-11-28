import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QouteBoxComponent } from './quote-box.component';

describe('QouteBoxComponent', () => {
  let component: QouteBoxComponent;
  let fixture: ComponentFixture<QouteBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QouteBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QouteBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
