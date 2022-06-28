import { TestBed } from '@angular/core/testing';

import { AddIngridientsService } from './add-ingridients.service';

describe('AddIngridientsService', () => {
  let service: AddIngridientsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddIngridientsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
