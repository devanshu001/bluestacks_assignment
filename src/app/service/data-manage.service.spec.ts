import { TestBed } from '@angular/core/testing';

import { DataManageService } from './data-manage.service';

describe('DataManageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataManageService = TestBed.get(DataManageService);
    expect(service).toBeTruthy();
  });
});
