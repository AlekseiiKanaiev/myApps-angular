import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDirectiveComponent } from './table-directive.component';

describe('TableDirectiveComponent', () => {
  let component: TableDirectiveComponent;
  let fixture: ComponentFixture<TableDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
