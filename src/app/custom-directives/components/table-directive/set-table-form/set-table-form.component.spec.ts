import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetTableFormComponent } from './set-table-form.component';

describe('SetTableFormComponent', () => {
  let component: SetTableFormComponent;
  let fixture: ComponentFixture<SetTableFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetTableFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetTableFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
