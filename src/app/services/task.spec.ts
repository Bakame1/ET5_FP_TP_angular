import { TestBed } from '@angular/core/testing';

import { Task_service } from './task_service';

describe('Task', () => {
  let service: Task_service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Task_service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
