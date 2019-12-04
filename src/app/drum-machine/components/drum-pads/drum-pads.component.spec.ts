import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrumPadsComponent } from './drum-pads.component';

describe('DrumPadsComponent', () => {
  let component: DrumPadsComponent;
  let fixture: ComponentFixture<DrumPadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrumPadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrumPadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
