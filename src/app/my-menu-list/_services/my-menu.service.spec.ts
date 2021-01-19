import { TestBed } from '@angular/core/testing';

import { MyMenuService } from './my-menu.service';

describe('MyMenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyMenuService = TestBed.get(MyMenuService);
    expect(service).toBeTruthy();
  });
});
