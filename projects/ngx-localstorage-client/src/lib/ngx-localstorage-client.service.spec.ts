import { TestBed } from '@angular/core/testing';

import { NgxLocalstorageClientService } from './ngx-localstorage-client.service';

describe('NgxLocalstorageClientService', () => {
  let service: NgxLocalstorageClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxLocalstorageClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
